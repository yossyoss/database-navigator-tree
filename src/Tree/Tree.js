import TreeNode from "../TreeNode/TreeNode"
import './Tree.css'
const Tree = ({ data = [] }) => {
  return (
    <div className='d-tree'>
      <ul className='d-flex d-tree-container flex-column'>
        {data.map((tree) => (
          <TreeNode node={tree} key={tree.key} />
        ))}
      </ul>
    </div>
  )
}

export default Tree
