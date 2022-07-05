import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getIconByType } from "../utils/getIconType"
import { useState } from "react"
import "./TreeNode.css"
import Tree from "../Tree/Tree"
import {
  faAngleRight,
  faDatabase,
  faFolderTree,
  faFolderPlus,
  faNetworkWired,
  faFile,
  faQuestion,
  faChessBoard,
} from "@fortawesome/free-solid-svg-icons"
library.add([
  faQuestion,
  faChessBoard,
  faAngleRight,
  faFile,
  faDatabase,
  faFolderTree,
  faFolderPlus,
  faNetworkWired,
])

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisiblity] = useState(false)

  const hasChild = node.nodes
  const isDisabled = node.isDisabled

  let iconType = getIconByType(node.type)
  return (
    <li className='d-tree-node border-0'>
      <div className='d-flex' onClick={(e) => setChildVisiblity((v) => !v)}>
        {hasChild && (
          <div
            className={`d-inline d-tree-toggler ${
              childVisible ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon='fa-solid fa-angle-right' />
          </div>
        )}
        <div className={"custom-icon " + (isDisabled ? "disabled" : "")}>
          <FontAwesomeIcon icon={iconType} />
        </div>

        <div className={"col d-tree-head " + (isDisabled ? "disabled" : "")}>
          {node.label}
        </div>
      </div>

      {hasChild && childVisible && !isDisabled && (
        <div className={"d-tree-content"}>
          <ul className='d-flex d-tree-container flex-column'>
            <Tree data={node.nodes} />
          </ul>
        </div>
      )}
    </li>
  )
}

export default TreeNode
