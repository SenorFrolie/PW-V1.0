import {defineDocumentType,makeSouce} from 'contentlayer/source-files'

const Post = defineDocumentType( () => ({
    name: "Post",
    filePathPattern: "**/*.md",
    feild: {
    title: {type: 'string', require: true},
    data: {type: 'date', require: true}
    },
}));

export default makeSource({
    contentDirPath: "post",
    DocumentType:[Post],
})