import { addMessageListener } from 'next/dist/client/dev/error-overlay/websocket.js'
import { useRouter } from 'next/router.js'
// NOTE use ESM/CommonJS compat import here until resolved: https://github.com/facebook/react/issues/11503
import React from 'react'

/**
 * Needed as a work around for https://github.com/vercel/next.js/issues/19230
 * Just needed in casese where you're importing from `.contentlayer/data` and use the data directly in your
 * React components without going through `getStaticProps` or `getServerSideProps` first.
 */
export const useLiveReload = () => {
  const router = useRouter()

  // `router.asPath` needs to be stored in a ref since there's no way to "update" the event listener below
  const routePathRef = React.useRef(router.asPath)
  React.useEffect(() => {
    routePathRef.current = router.asPath
  }, [router.asPath])

  React.useEffect(() => {
    let lastBuiltHash: string | undefined

    // Based on this "implementation detail"
    // https://github.com/vercel/next.js/blob/canary/packages/next/client/dev/error-overlay/eventsource.js
    addMessageListener((e: any) => {
      // console.log(e.type, e.data, e)

      if (e.type === 'message' && typeof e.data === 'string') {
        const data = JSON.parse(e.data)

        if ((data.action === 'built' || data.action === 'sync') && data.hash !== lastBuiltHash) {
          if (lastBuiltHash !== undefined) {
            router.replace(routePathRef.current)
          }

          lastBuiltHash = data.hash
        }
      }
    })
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [routePathRef])
}