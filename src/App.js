import "./App.css"
import { treeData } from "./data"
import Tree from "./Tree/Tree"
function App() {
  return (
    <div className='app'>
      <div className='row'>
        <div className='col text-center'>
          <div className='mt-3'>
            <div className='row mt-3 d-flex justify-content-center'>
              <div className='col-lg-8 text-left text-dark'>
                <Tree data={treeData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
