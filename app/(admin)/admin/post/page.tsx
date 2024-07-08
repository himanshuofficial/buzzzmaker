

const PostCreate = () => {
    return (
        <form className="flex flex-col">
            <label htmlFor="title">title</label>
            <input  type="text" name="title" id="title" className="border"/>
            <label htmlFor="title">Description</label>
            <input  type="text" name="title" id="title" className="border"/>
            <label htmlFor="title">category id</label>
            <input  type="text" name="title" id="title" className="border"/>
        </form>
    )
}

export default PostCreate;