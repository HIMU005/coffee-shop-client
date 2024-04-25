import { MdEdit, MdDelete } from "react-icons/md";
import { IoIosEye } from "react-icons/io";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const CoffeeCard = ({ singleCoffee, coffees, setCoffees }) => {
    const {
        _id, name, quantity, supplier, taste,
        // category, details,
        photo
    } = singleCoffee;

    const handleDelete = _id => {
        console.log('delete', _id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-blue-delta.vercel.app/coffee/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(coffee => coffee._id !== _id)
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="card h-80 card-side shadow-xl bg-[#F5F4F1]">
            <figure className="">
                <img className="" src={photo} alt={name} />
            </figure>
            <div className="flex justify-between w-full pr-4">
                <div className="">
                    <h2 className="">{name}</h2>
                    <h2 className="">{taste}</h2>
                    <h2 className="">{quantity}</h2>
                    <h2>Supplier : {supplier}</h2>
                </div>
                <div className="flex flex-col gap-3">
                    <button className=" bg-primary p-4 rounded-2xl"><IoIosEye /></button>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className=" bg-secondary p-4 rounded-2xl"><MdEdit /></button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className=" bg-red-500 p-4 rounded-2xl"><MdDelete /></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;

CoffeeCard.propTypes = {
    singleCoffee: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.func
}