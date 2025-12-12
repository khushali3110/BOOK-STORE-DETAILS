import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import Api from "./Api";
import { useEffect, useState } from "react";

const App = () => {
  const { register, handleSubmit, reset } = useForm({});

    const [tasks, setTasks] = useState([]);
   const [editId, setEditId] = useState(null);
   

  const Add = async (data) => {
    console.log(data);
     if (editId) {
        await Api.put(`/task/${editId}`, data);
        alert("Task Updated");
        setEditId(null);
        reset(

        {Name: "",
    title: "",
    email: "",
    grid: "",
    mobile:""}
        )
      } else {
        await Api.post("/task", data);
        alert("Task Inserted");
        
      }
      reset()
  };

  const showApi = async () => {
    try {
      const res = await Api.get("/task");
      setTasks(res.data.tasks);
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    showApi();
  }, []);

   const DeleteTask = async (id) => {
      try {
        await Api.delete(`/task/${id}`);
        alert("Task Deleted");
        showApi();
      } catch (error) {
        console.log(error);
      }
    };
    
      const EditTask = (task) => {
    setEditId(task._id);
    reset({
      Name: task.Name,
      title: task.title,
      email: task.email,
      grid: task.grid,
      mobile: task.mobile,
    });
  };

     
 return (
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card shadow">
          <div className="card-header bg-success text-white text-center">
            <h4>{editId ? "Enter book indentiys" : "Enter book colleaction"}</h4>
          </div>

          <div className="card-body">
            <form onSubmit={handleSubmit(Add)}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    className="form-control"
                    {...register("Name")}
                    placeholder="Enter Book Name"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    className="form-control"
                    {...register("title")}
                    placeholder="Enter author name"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    className="form-control"
                    {...register("email")}
                    placeholder="Enter your Email"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    className="form-control"
                    {...register("grid")}
                    placeholder="Enter your Grid"
                  />
                </div>

                <div className="col-md-12 mb-3">
                  <input
                    className="form-control"
                    {...register("mobile")}
                    placeholder="Enter your Mobile"
                  />
                </div>
              </div>

              <button className="btn btn-primary w-100">
                {editId ? "Update" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    {/* Table Section */}
    <div className="row mt-5">
      <div className="col-12">
        <div className="card shadow">
          <div className="card-header bg-danger text-dark text-center">
            <h4>Book List</h4>
          </div>

          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered table-hover text-center">
                <thead className="table-secondary">
                  <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Email</th>
                    <th>Grid</th>
                    <th>Mobile</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {tasks.map((t) => (
                    <tr key={t._id}>
                      <td>{t.Name}</td>
                      <td>{t.title}</td>
                      <td>{t.email}</td>
                      <td>{t.grid}</td>
                      <td>{t.mobile}</td>
                      <td>
                        <button
                          className="btn btn-outline-success btn-sm me-2 rounded-pill px-3"
                          onClick={() => EditTask(t)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-outline-danger btn-sm rounded-pill px-3"
                          onClick={() => DeleteTask(t._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

  
};

export default App;