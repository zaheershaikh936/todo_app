// ! other import
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// !icons import
import { logo } from '../../assets/index';
import { MdHomeFilled, MdLogout, MdTaskAlt } from 'react-icons/md';
import axios from '../../api/axios';


// from backend  just send title to show and display the title in map
const Navbar = () => {
	const [tagCount, setTagCount] = useState({important: 0, Non_important:0, later:0});
	const isLoginData = useSelector((store: any) => store.auth);
    const isLogin = isLoginData?.isLogin
	const getTagCount = async () => {
		const response = await axios.get('todo/favorites');
		if (response?.status === 200) {
			setTagCount(response?.data?.data)
		}
		return response;
	}

	const getFavorites = async () => {
		const response = await axios.get('todo/tag-count');
		if (response?.status === 200) {
			setTagCount(response?.data?.data)
		}
		return response;
	}

	useEffect(() => {
		if (isLogin) {
			getTagCount();
			getFavorites();
		}
	},[isLogin])
	return (
		<nav className="hidden md:inline w-1/5 p-5 flex-none">
			<div className="p-4 h-full bg-white rounded-xl">
				<div className="mb-3 flex gap-4 justify-center">
					<img src={logo} alt="logo" width={50} height={50} />
					<h2 className="text-xl font-semibold mt-2">Todo App</h2>
				</div>
				<hr />
				<div className="mt-3 mb-3 px-2 py-3">
					<Link to={'/home'} className="mt-3 p-4 w-full flex gap-2 hover:text-white hover:rounded hover:bg-blue-400">
						<MdHomeFilled className="text-3xl" />
						<p className="text-md mt-1 font-semibold">Home</p>
					</Link>
					<Link to={'/'} className="mt-3 p-4 w-full flex gap-2 hover:text-white hover:rounded hover:bg-blue-400">
						<MdLogout className="text-3xl" />
						<p className="text-md mt-1 font-semibold">Login</p>
						{/* </button> */}
					</Link>
				</div>
				<hr />
				<div className="mt-3 px-2 py-3">
					<div className="mb-3">
						<p className="text-xl font-semibold">Tags</p>
						<div className="p-4 flex gap-2 text-red-300 hover:text-white hover:rounded hover:bg-blue-400">
							<MdTaskAlt className=" text-3xl " />
							<p className="text-md font-semibold">Important: { tagCount?.important}</p>
						</div>
						<div className="p-4 flex gap-2 text-green-300 hover:text-white hover:rounded hover:bg-blue-400">
							<MdTaskAlt className="text-3xl" />
							<p className="text-md one-line font-semibold">Non important: { tagCount?.Non_important}</p>
						</div>
						<div className="p-4 flex gap-2 text-yellow-300 hover:text-white hover:rounded hover:bg-blue-400">
							<MdTaskAlt className="text-3xl" />
							<p className="text-md one-line font-semibold">Can be done later: { tagCount?.later}</p>
						</div>
					</div>
					<hr />
					<div className="mt-3">
						<p className="text-xl font-semibold">Favorites</p>
						<div className="px-4 mt-2 flex gap-2 text-red-300">
							<MdTaskAlt className="text-3xl" />
							<p className="text-md one-line font-semibold">Design</p>
						</div>
						<div className="px-4 mt-2 flex gap-2 text-green-300">
							<MdTaskAlt className="text-3xl" />
							<p className="text-md one-line font-semibold">Development</p>
						</div>
						<div className="px-4 mt-2 flex gap-2 text-yellow-300">
							<MdTaskAlt className="text-3xl" />
							<p className="text-md one-line font-semibold">Logo redesign</p>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
