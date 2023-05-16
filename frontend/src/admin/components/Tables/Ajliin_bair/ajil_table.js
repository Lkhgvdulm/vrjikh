import React, { useEffect, useState } from "react";
import { Modal } from "@mantine/core";
import axios from "axios";
import { CDNURL, url } from "../../../../utils/url";
import Swal from "sweetalert2";
import { AiOutlineDelete } from "react-icons/ai";

const Ajil_table =() => {
    const [opened, setOpened] = useState(false);
	const [AJIL, setAjil] = useState([]);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [refreshKey, setRefreshKey] = useState(0);
	useEffect(() => {
		const getSlider = async () => {
			const { data } = await axios.get(`${url}/workplace`);
			setAjil(data.data);
		};
		getSlider();
	},[refreshKey]);
	async function createSlider(event) {
		event.preventDefault();
		let formdata = new FormData();
		formdata.append('name', name);
		formdata.append('description', description);
		const { data } = await axios.post(`${url}/workplace_create`, formdata);
		if(data.success) {
			console.log('Амжилттай нэмэгдлээ');
			setRefreshKey((old) => old +1);
			setName('');
			setDescription('');
			setOpened(false);
			Swal.fire({
				title: 'Амжилттай нэмэгдлээ', 
				icon: 'success',
			});
			if(!data.success) {
				Swal.fire({
					title: 'Амжилтгүй',
					icon: 'error',
					text: data.result && data.result,
				})

			}
		}
	}
	const deleteSlider = async (itemId) => {
		const { data } = await axios.delete(`${url}/workplace_delete/${itemId}`);
		if(data.success) {
			setRefreshKey((old) => old +1);
			Swal.fire({
				title: 'Амжилттай устгалаа',
				icon: 'success',
			});
			if(!data.success) {
				Swal.fire({
					title: 'Амжилтгүй',
					icon: 'error',
				});
			}
		}
	};
    return(
        <div>
           <div className="flex space-x-2 justify-end">
				<button
					type="button"
					className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
					onClick={() => setOpened(true)}
				>
					Мэдээлэл нэмэх
				</button>
			</div>
			<div className="flex flex-col">
				<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
						<div className="overflow-hidden">
							<table className="min-w-full">
								<thead className="bg-white border-b">
									<tr>
										<th
											scope="col"
											className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
										>
											Name
										</th>
										<th
											scope="col"
											className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
										>
											Description
										</th>
										<th
											scope="col"
											className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
										>
											Action
										</th>
									</tr>
								</thead>
								<tbody>
									{AJIL.map((row) => (
										<tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
										<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
											{row.name}
										</td>
										<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											{row.description}
										</td>
										<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											<AiOutlineDelete
												className="text-red-500 text-lg"
												onClick={() => deleteSlider(row._id)}
											/>
										</td>
									</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<Modal opened={opened} onClose={() => setOpened(false)} title="Job">
				<div className="flex justify-center">
					<div className="mb-3 xl:w-96">
						<label
							for="exampleFormControlInput1"
							className="form-label inline-block mb-2 text-gray-700"
						>
							name
						</label>
						<input
							type="text"
							className="
    form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  "
							id="exampleFormControlInput1"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="name"
						/>
					</div>
				</div>
				<div className="flex justify-center">
					<div className="mb-3 xl:w-96">
						<label
							for="exampleFormControlInput1"
							className="form-label inline-block mb-2 text-gray-700"
						>
							Title
						</label>
						<input
							type="text"
							className="
    form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  "
							id="exampleFormControlInput1"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							placeholder="Title"
						/>
					</div>
				</div>

				<div className="flex space-x-2 justify-center">
					<button
						type="button"
						data-mdb-ripple="true"
						data-mdb-ripple-color="light"
						className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						onClick={createSlider}
					>
						Нэмэх
					</button>
				</div>
			</Modal>
        </div>
    )
}
export default Ajil_table