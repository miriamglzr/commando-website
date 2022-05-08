import { Page } from "../../components/Page";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { AddProduct, TableDiv } from "../../components/layout.styles";
import axios from "axios";
//import useSWR from "swr"; failed

type Table = string;

const itemVariants = {
	hidden: {
		opacity: 0,
		scale: 0,
		transition: {
			ease: "easeIn",
		},
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			mass: 3,
		},
	},
};

const listVariants = {
	hidden: {
		opacity: 0,
		transition: {
			when: "afterChildren",
			staggerChildren: 0.05,
		},
	},
	visible: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.05,
		},
	},
};
export default function Tables() {
	const constraintsRef = useRef(null);
	const [rendered, setRendered] = useState(false);
	const [items, setItems] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get("/api/tables");

			setItems(data);
		};
		fetchData();
	}, []);

	useEffect(() => {
		if (items.length > 0) {
			setRendered(true);
		}
	}, [items]);

	const addItem = () => {
		items.length !== 72 && addTable();
	};

	async function addTable() {
		const table = { id: `${items.length + 1}` };

		const res = await axios.post("/api/tables", table);
		setItems(res.data);
	}

	return (
		<Page>
			<title>Mando | Tables</title>
			<div className="container mw-100">
				<div className="row">
					<div className="col d-flex justify-content-start mt-4">
						<h4>Tables</h4>
					</div>
					<div className="col  d-flex justify-content-end mt-4">
						<AddProduct className="fab" onClick={addItem}>
							+
						</AddProduct>
					</div>
				</div>
				<div className="container table-grid col ">
					<div className="row">
						<div id="outer-dropzone" className="dropzone" ref={constraintsRef}>
							Dropzone
							<motion.div
								className="content container row"
								initial="hidden"
								animate={rendered ? "visible" : "hidden"}
								variants={listVariants}
								style={{ maxHeight: "400px" }}
							>
								{items.map((item) => (
									<div key={item} className="col">
										<motion.div
											variants={itemVariants}
											drag
											dragConstraints={constraintsRef}
											whileTap={{ backgroundColor: "rgba(247, 210, 82, 0.7)" }}
											dragTransition={{
												power: 0,
												bounceDamping: 5,
											}}
											style={{
												width: "40px",
												height: "40px",
												backgroundColor: "#E6DDCA",
												borderRadius: "5%",
											}}
										>
											<TableDiv>{item}</TableDiv>
										</motion.div>
									</div>
								))}
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</Page>
	);
}
