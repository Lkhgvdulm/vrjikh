import React, { useEffect, useState } from "react";
import { Modal } from "@mantine/core";
import axios from "axios";
import { CDNURL, url } from "../../../../utils/url";
import Swal from "sweetalert2";
import { AiOutlineDelete } from "react-icons/ai";

const Directors_table =() => {
    const [opened, setOpened] = useState(false);
	const [directors, setDirectors] = useState([]);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState(false);
	const [refreshKey, setRefreshKey] = useState(0);
	const [newImage, setNewImage] = useState(false);
	useEffect(() => {
		const getDirectors = async () => {
			const { data } = await axios.get(`${url}/director`);
			setDirectors(data.data);
			console.log('dir', data);
		};
		getDirectors();
	}, [refreshKey]);
	async function createSlider(event) {
		event.preventDefault ();
		let formdata = new FormData();
		formdata.append('name', name);
		formdata.append('description', description);
		formdata.append('avatar', image[0]);
		const { data } = await axios.post(`${url}/director_create`, formdata);
		if(data.success) {
			console.log('Амжилттай нэмэгдлээ');
			setRefreshKey((old) => old +1);
			setName('');
			setDescription('');
			setImage(null);
			setOpened(false);
			Swal.fire({
				title: 'Амжилттай нэмэгдлээ',
				icon: 'success',
			});
			if(!data.success) {
				Swal.fire({
					title:'Амжилтгүй',
					icon: 'error',
					text: data.result && data.result,
				});
			}
		}
	}
	const deleteSlider = async (itemId) => {
		const { data } = await axios.delete(`${url}/director_delete/${itemId}`);
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
			</div>
			<div className="flex flex-col">
				<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
						<div class="overflow-hidden">
							<table class="min-w-full text-left text-sm font-light">
								<thead class="border-b font-medium dark:border-neutral-500">
									<tr>
										<th scope="col" class="px-6 py-4">
											Name
										</th>
										<th scope="col" class="px-6 py-4">
											Description
										</th>
										<th scope="col" class="px-6 py-4">
											Image
										</th>
									</tr>
								</thead>
								<tbody>
									{directors.map((row) => (
									<tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
										<td class="whitespace-nowrap px-6 py-4 font-medium">
											{row.name}
										</td>
										<td className="whitespace-nowrap px-6 py-4">
												{row.description}
											</td>
										<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<img
													className="w-[100px] h-[80px]"
													src={`${CDNURL}/${row.avatar}`}
												/>
										</td>
										<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											<AiOutlineDelete className="text-red-500 text-lg" 
											onClick={() => deleteSlider(row._id)}/>
										</td>
									</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<Modal opened={opened} onClose={() => setOpened(false)} title="Directors">
				<div className="flex justify-center">
					<div className="mb-3 xl:w-96">
						<label
							for="exampleFormControlInput1"
							className="form-label inline-block mb-2 text-gray-700"
						>
							Ner
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
							placeholder="Name"
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
							onChange={(e) => setDescription(e.target.directors)}
							placeholder="Title"
						/>
					</div>
				</div>

				<div className="flex justify-center">
					<div className="mb-3 w-96">
						<label
							for="formFile"
							className="form-label inline-block mb-2 text-gray-700"
						>
							Зураг
						</label>
						<input
							className="form-control
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
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							type="file"
							id="formFile"
							onChange={(e) => {
								if (e.target?.files) {
									setImage(e.target.files);
									setNewImage(true);
								} else {
									setImage(null);
									setNewImage(false);
								}
							}}
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
export default Directors_table