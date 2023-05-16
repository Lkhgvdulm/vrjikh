import React, { useEffect, useState } from 'react';
import { Modal } from '@mantine/core';
import axios from 'axios';
import { CDNURL, url } from '../../../../utils/url';
import Swal from 'sweetalert2';
import { AiOutlineDelete } from 'react-icons/ai';

const Medee_table = () => {
	const [opened, setOpened] = useState(false);
	const [NEWS, setNews] = useState([]);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState(false);
	const [refreshKey, setRefreshKey] = useState(false);
	useEffect(() => {
		const getNews = async () => {
			const { data } = await axios.get(`${url}/news`);
			console.log('da',data);
			setNews(data.data);
		};
		getNews();
	}, [refreshKey]);
	async function createNews(event) {
		event.preventDefault();
		let formdata = new FormData();
		formdata.append('name', name);
		formdata.append('description', description);
		formdata.append('avatar', image[0]);
		const { data } = await axios.post(`${url}/news_create`, formdata);
		if (data.success) {
			console.log('Амжилттай нэмэгдлээ');
			setRefreshKey((old) => old + 1);
			setName('');
			setDescription('');
			setImage(null);
			setOpened(false);
			Swal.fire({
				title: 'Амжилттай нэмэгдлээ',
				icon: 'success',
			});
			if (!data.success) {
				Swal.fire({
					title: 'Амжилтгүй',
					icon: 'error',
					text: data.result && data.result,
				});
			}
		}
	}
	const deleteNews = async (itemId) => {
		const { data } = await axios.delete(`${url}/news_delete/${itemId}`);
		if (data.success) {
			setRefreshKey((old) => old + 1);
			Swal.fire({
				title: 'Амжилттай устгалаа',
				icon: 'success',
			});
			if (!data.success) {
				Swal.fire({
					title: 'Амжилтгүй',
					icon: 'error',
				});
			}
		}
	};
	return (
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
											Нэр
										</th>
										<th
											scope="col"
											className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
										>
											Тайлбар
										</th>
										<th
											scope="col"
											className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
										>
											Image
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
									{NEWS.map((row) => (
										<tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
											<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
												{row.name}
											</td>
											<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
												{row.description}
											</td>
											<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
												<img
													className="w-[100px] h-[80px]"
													sr
													c={`${CDNURL}/${row.avatar}`}
												/>
											</td>
											<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
												<AiOutlineDelete
													className="text-red-500 text-lg"
													onClick={() => deleteNews(row._id)}
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
			<Modal opened={opened} onClose={() => setOpened(false)} title="Value">
				<div className="flex justify-center">
					<div className="mb-3 xl:w-96">
						<label
							for="exampleFormControlInput1"
							className="form-label inline-block mb-2 text-gray-700"
						>
							Name
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
							onChange={(e) => setDescription(e.target.value)}
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
									// setNewImage(true);
								} else {
									setImage(null);
									// setNewImage(false);
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
						onClick={createNews}
					>
						Нэмэх
					</button>
				</div>
			</Modal>
		</div>
	);
};
export default Medee_table;
