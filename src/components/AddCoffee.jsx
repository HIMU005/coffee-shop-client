import Swal from "sweetalert2";

const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;


        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        // console.log(newCoffee);

        // send data to the server 
        fetch('https://coffee-store-server-blue-delta.vercel.app/coffee', {
            method: "POST",
            headers: {
                "content-type": 'application/json',
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                    Swal.fire({
                        title: "The Internet?",
                        text: "coffee added successfully",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <div>
            <h2 className="text-3xl font-extrabold text-center">Add coffee</h2>
            <form onSubmit={handleAddCoffee} className="bg-[#F4F3F0] p-24">

                {/* first row name quantity*/}
                <div className="flex justify-between gap-5">
                    {/* name  */}
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Coffee Name</span>
                        </div>
                        <input type="text" name="name" placeholder="Type here" className="input input-bordered w-full " />
                    </label>
                    {/* name  */}
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Available Quantity</span>
                        </div>
                        <input type="text" name="quantity" placeholder="Type here" className="input input-bordered w-full" />
                    </label>
                </div>

                {/* second row supplier and taste*/}
                <div className="flex justify-between gap-5">
                    {/* supplier  */}
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Supplier</span>
                        </div>
                        <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered w-full " />
                    </label>
                    {/* taste  */}
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Taste</span>
                        </div>
                        <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                    </label>
                </div>

                {/* third row Category and  */}
                <div className="flex justify-between gap-5">
                    {/* category  */}
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <input type="text" name="category" placeholder="Category" className="input input-bordered w-full " />
                    </label>
                    {/* details  */}
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Details</span>
                        </div>
                        <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                    </label>
                </div>

                {/* photo  */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">PhotoUrl</span>
                    </div>
                    <input type="text" name="photo" placeholder="Type here" className="input input-bordered w-full " />
                </label>
                {/* btn  */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text"></span>
                    </div>
                    <input type="submit" className="input input-bordered btn btn-block" />
                </label>
            </form>
        </div>
    );
};

export default AddCoffee;