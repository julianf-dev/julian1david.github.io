import { useState } from "react";

const useModal = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const [size, setSize] = useState({
		width: undefined,
		height: undefined,
	});

	const menuHandler = () => {
		setMenuOpen(p => !p);
	};

	const states = {
		size,
		menuOpen,
	};

	const stateUpdaters = {
		setMenuOpen,
		setSize,
		menuHandler,
	};

	return { states, stateUpdaters };
};

export default useModal;
