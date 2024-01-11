import { Table } from "react-bootstrap"

export const ContentTable = ({ data }) => {


  return (
    <>
      <div className="">
        <h1 className="mb-3">Table view</h1>
        <Table responsive="lg" bordered hover size="lg">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Title</th>
              <th>Views</th>
              <th>Answers count</th>
            </tr>
          </thead>
          <tbody>

            {data && data.length && data.map((tableData, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{tableData && tableData.title}</td>
                  <td>{tableData && tableData.views}</td>
                  <td>{tableData && tableData.answerCount}</td>
                </tr>
              )
            })
            }

          </tbody>
        </Table>
      </div>
    </>
  )


}