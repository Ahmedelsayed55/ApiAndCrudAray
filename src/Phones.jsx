import React, { useRef, useState } from "react";

const Phones = () => {
  const [editPhoneIndex, setEditPhoneIndex] = useState();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  let inputName = useRef();
  let inputPrice = useRef();
  let inputQty = useRef();
  
  let inputName2 = useRef();
  let inputPrice2 = useRef();
  let inputQty2 = useRef();

 const [phones, setPhones] = useState(JSON.parse(localStorage.getItem("phones")) || []);


  let showEditModel = (index) => {
    setEditPhoneIndex(index);
    setShowEditModal(true);
    let copyPhone = phones[index];
    inputName2.current.value = copyPhone.name;
    inputPrice2.current.value = copyPhone.price;
    inputQty2.current.value = copyPhone.qty;
  };

  let editPhone = (index) => {

let copyPhones = [...phones];
copyPhones[index] = {
  name: inputName2.current.value,
  price: inputPrice2.current.value,
  qty: inputQty2.current.value,
};
setPhones(copyPhones);
setShowEditModal(false);
localStorage.setItem("phones", JSON.stringify(copyPhones));
  }

  let addPhone = () => {
    let newPhone = {
      id: phones.length + 1,
      name: inputName.current.value,
      price: inputPrice.current.value,
      qty: inputQty.current.value,
    };
    let copyPhones = [...phones];

    setPhones([...copyPhones, newPhone]);
    setShowAddModal(false);
    localStorage.setItem("phones", JSON.stringify([...copyPhones, newPhone]));
  };

  let removePhone = (index) => {
    let copyPhones = [...phones];
    copyPhones.splice(index, 1);
    setPhones(copyPhones);
    localStorage.setItem("phones", JSON.stringify(copyPhones));
  };
  return (
    <div className="p-10">
      <div className="container mx-auto">
        <button
          className="btn btn-primary px-10"
          onClick={() => setShowAddModal(true)}
        >
          Add
        </button>
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>price</th>
              <th>qty</th>
            </tr>
          </thead>
          <tbody>
            {phones.map((phone, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{phone.name}</td>
                  <td>{phone.price}</td>
                  <td>{phone.qty}</td>
                  <td className="flex gap-2">
                    <button
                      className="btn btn-warning"
                      onClick={() => showEditModel(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-error"
                      onClick={() => removePhone(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Add model */}

      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center">
          <div className="bg-black p-6 rounded shadow-lg w-1/3">
            <h2 className="text-xl mb-4">Add New Phone</h2>
            <div className="grid gap-4">
              <input
                ref={inputName}
                className="input input-success w-full"
                type="text"
                placeholder="Name"
              />
              <input
                ref={inputPrice}
                className="input input-success w-full"
                type="text"
                placeholder="Price"
              />
              <input
                ref={inputQty}
                className="input input-success w-full"
                type="text"
                placeholder="Qty"
              />
              <div className="flex gap-2 w-full">
                <button className="btn btn-success w-1/2" onClick={addPhone}>
                  Add Phone
                </button>
                <button
                  className="btn btn-error grow"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit model */}

     
        <div className={`fixed inset-0 bg-black/40 bg-opacity-50  items-center justify-center ${showEditModal ? 'flex' : 'hidden'}`}>
          <div className="bg-black p-6 rounded shadow-lg w-1/3">
            <h2 className="text-xl mb-4">Edit Phone</h2>
            <div className="grid gap-4">
              <input
                ref={inputName2}
                className="input input-success w-full"
                type="text"
                placeholder="Name"
              />
              <input
                ref={inputPrice2}
                className="input input-success w-full"
                type="text"
                placeholder="Price"
              />
              <input
                ref={inputQty2}
                className="input input-success w-full"
                type="text"
                placeholder="Qty"
              />
              <div className="flex gap-2 w-full">
                <button className="btn btn-success w-1/2" onClick={()=>editPhone(editPhoneIndex)}>Edit Phone</button>
                <button
                  className="btn btn-error grow"
                  onClick={() => setShowEditModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
    
    </div>
  );
};

export default Phones;
