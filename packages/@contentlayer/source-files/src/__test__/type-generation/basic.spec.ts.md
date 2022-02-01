# Snapshot report for `src/__test__/type-generation/basic.spec.ts`

The actual snapshot is saved in `basic.spec.ts.snap`.

Generated by [AVA](https://avajs.dev).

## generate-types: simple schema

> Snapshot 1

    `// NOTE This file is auto-generated by the Contentlayer CLI␊
    ␊
    import type { Markdown, MDX } from 'contentlayer/core'␊
    import * as Local from 'contentlayer/source-files'␊
    ␊
    export { isType } from 'contentlayer/client'␊
    ␊
    // export type Image = string␊
    export type { Markdown, MDX }␊
    ␊
    export interface ContentlayerGenTypes {␊
      documentTypes: DocumentTypes␊
      documentTypeMap: DocumentTypeMap␊
      documentTypeNames: DocumentTypeNames␊
      nestedTypes: NestedTypes␊
      nestedTypeMap: NestedTypeMap␊
      nestedTypeNames: NestedTypeNames␊
      allTypeNames: AllTypeNames␊
    }␊
    ␊
    declare global {␊
      interface ContentlayerGen extends ContentlayerGenTypes {}␊
    }␊
    ␊
    export type DocumentTypeMap = {␊
      TestPost: TestPost␊
    }␊
    ␊
    export type NestedTypeMap = {␊
    ␊
    }␊
    ␊
    export type AllTypes = DocumentTypes | NestedTypes␊
    export type AllTypeNames = DocumentTypeNames | NestedTypeNames␊
    ␊
    export type DocumentTypes = TestPost␊
    export type DocumentTypeNames = 'TestPost'␊
    ␊
    export type NestedTypes = never␊
    export type NestedTypeNames = never␊
    ␊
    ␊
    ␊
    /** Document types */␊
    export type TestPost = {␊
      /** File path relative to \`contentDirPath\` */␊
      _id: string␊
      _raw: Local.RawDocumentData␊
      type: 'TestPost'␊
      /** The title of the post */␊
      title: string␊
      /** The date of the post */␊
      date: string␊
      /** Markdown file body */␊
      body: Markdown␊
      slug: string␊
    }  ␊
    ␊
    /** Nested types */␊
      ␊
      ␊
     `

## generate-types: references with embedded schema

> Snapshot 1

    `// NOTE This file is auto-generated by the Contentlayer CLI␊
    ␊
    import type { Markdown, MDX } from 'contentlayer/core'␊
    import * as Local from 'contentlayer/source-files'␊
    ␊
    export { isType } from 'contentlayer/client'␊
    ␊
    // export type Image = string␊
    export type { Markdown, MDX }␊
    ␊
    export interface ContentlayerGenTypes {␊
      documentTypes: DocumentTypes␊
      documentTypeMap: DocumentTypeMap␊
      documentTypeNames: DocumentTypeNames␊
      nestedTypes: NestedTypes␊
      nestedTypeMap: NestedTypeMap␊
      nestedTypeNames: NestedTypeNames␊
      allTypeNames: AllTypeNames␊
    }␊
    ␊
    declare global {␊
      interface ContentlayerGen extends ContentlayerGenTypes {}␊
    }␊
    ␊
    export type DocumentTypeMap = {␊
      Person: Person␊
      Post: Post␊
    }␊
    ␊
    export type NestedTypeMap = {␊
    ␊
    }␊
    ␊
    export type AllTypes = DocumentTypes | NestedTypes␊
    export type AllTypeNames = DocumentTypeNames | NestedTypeNames␊
    ␊
    export type DocumentTypes = Person | Post␊
    export type DocumentTypeNames = 'Person' | 'Post'␊
    ␊
    export type NestedTypes = never␊
    export type NestedTypeNames = never␊
    ␊
    ␊
    ␊
    /** Document types */␊
    export type Person = {␊
      /** File path relative to \`contentDirPath\` */␊
      _id: string␊
      _raw: Local.RawDocumentData␊
      type: 'Person'␊
      name: string␊
      /** Markdown file body */␊
      body: Markdown␊
    ␊
    }␊
    ␊
    export type Post = {␊
      /** File path relative to \`contentDirPath\` */␊
      _id: string␊
      _raw: Local.RawDocumentData␊
      type: 'Post'␊
      title: string␊
      author: Person␊
      /** Markdown file body */␊
      body: Markdown␊
    ␊
    }  ␊
    ␊
    /** Nested types */␊
      ␊
      ␊
     `