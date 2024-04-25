import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const loaderSingleData = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo
    } = loaderSingleData;

    const handleUpdateCoffee = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;


        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
        // console.log(newCoffee);

        // send data to the server 
        fetch(`https://coffee-store-server-blue-delta.vercel.app/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": 'application/json',
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {

                    Swal.fire({
                        title: "Coffee",
                        text: "coffee updated successfully",
                        icon: "success"
                    });
                    // alert("added successfully");
                    //    form.reset();
                }
            })
    }


    return (
        <div>
            <h3>Update coffee {name}</h3>
            <img src={photo} alt="" />
            <form onSubmit={handleUpdateCoffee} className="bg-[#F4F3F0] p-24">

                {/* first row name quantity*/}
                <div className="flex justify-between gap-5">
                    {/* name  */}
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Coffee Name</span>
                        </div>
                        <input type="text" name="name" defaultValue={name} placeholder="Type here" className="input input-bordered w-full " />
                    </label>
                    {/* name  */}
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Available Quantity</span>
                        </div>
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="Type here" className="input input-bordered w-full" />
                    </label>
                </div>

                {/* second row supplier and taste*/}
                <div className="flex justify-between gap-5">
                    {/* supplier  */}
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Supplier</span>
                        </div>
                        <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier" className="input input-bordered w-full " />
                    </label>
                    {/* taste  */}
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Taste</span>
                        </div>
                        <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" />
                    </label>
                </div>

                {/* third row Category and  */}
                <div className="flex justify-between gap-5">
                    {/* category  */}
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full " />
                    </label>
                    {/* details  */}
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Details</span>
                        </div>
                        <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                    </label>
                </div>

                {/* photo  */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">PhotoUrl</span>
                    </div>
                    <input type="text" name="photo" defaultValue={photo} placeholder="Type here" className="input input-bordered w-full " />
                </label>
                {/* btn  */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text"></span>
                    </div>
                    <input type="submit" value="Update coffee" className="input input-bordered btn btn-block" />
                </label>
            </form>

        </div>
    );
};

export default UpdateCoffee;