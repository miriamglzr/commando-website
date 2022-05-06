import React, { useState } from "react";
import {
	Modal,
	Form,
	Input,
	Button,
	Select,
	Checkbox,
	Row,
	Col,
	Radio,
} from "antd";
import { allergenIcons } from "../database/allergens";
//import DeleteProduct from './DeleteProduct';
//import UploadImage from "./UploadImage";
import { checkProduct } from "./checkProduct";
// import dish from '../../img/dish.png';
import ItemCard from "./ItemCard";

const { Option } = Select;
const { TextArea } = Input;

const layout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 18 },
};
const tailLayout = {
	wrapperCol: { offset: 6, span: 18 },
};

function EditProduct({ data }: { data: any }) {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [form] = Form.useForm();
	//const { buttonName, updateProduct } = props;
	const [loading, setLoading] = useState(false);
	// const { menu } = props;

	// Add a product
	const onFinish = async (values: any) => {
		console.log(values);
		let verified = await checkProduct.add(values);
		console.log(verified);
		await enterLoading();
		await handleOk();
	};

	// Update a product
	const onUpdate = async (values: any) => {
		await console.log(values);

		let updatedProduct = values;
		// update just changes
		for (const key in values) {
			if (values[key]) {
				updatedProduct[key] = values[key];
			}
		}
		//await updateProduct(updatedProduct); //this is only sending new changes not with all initial object values
		await enterLoading();
		await handleOk();
	};

	const onReset = () => {
		form.resetFields();
	};

	const enterLoading = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 6000);
	};

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setConfirmLoading(true);
		setTimeout(() => {
			setIsModalVisible(false);
			setConfirmLoading(false);
			onReset();
		}, 2000);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};
	const onChange = (checkedValues: any) => {
		console.log("checked = ", checkedValues);
		// console.log (data.allergens);
		// console.log (allergenIcons);
		// allergenIcons.map (allergen => {
		//   return data.allergens.includes (allergen.name)
		//     ? console.log (allergen)
		//     : false;
		// });
	};

	return (
		<div className="m-2" style={{ height: 210, width: "auto", padding: 0 }}>
			{/* <Row gutter={16}> */}
			{/* {menu &&
					menu.length &&
					menu.map((data: Product, i: number) => {
						return ( */}

			<Button
				onClick={showModal}
				style={{ padding: 0, width: 100, border: "none" }}
			>
				<ItemCard item={data} />
			</Button>

			<Modal
				title={"Edit Product"}
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				width={520}
				footer={null}
				confirmLoading={confirmLoading}
			>
				<Form
					{...layout}
					form={form}
					name="control-hooks"
					//onFinish={!buttonName ? onFinish : onUpdate}
				>
					<Form.Item
						name="name"
						label="Product Name"
						//rules={!buttonName && [{ required: true }]}
					>
						<Input defaultValue={data ? data.name : ""} maxLength={50} />
					</Form.Item>
					<Form.Item
						name="section_id"
						label="Section"
						//rules={!buttonName && [{ required: true }]}
					>
						<Select
							placeholder="Select an option and change input text above"
							onChange={(option) => console.log(option)}
							allowClear
							defaultValue={data ? data.section_id : ""}
						>
							<Option value={1}>De Maíz</Option>
							{/* {sections &&
														sections.length &&
														sections.map((section, i) => {
															let sectionLowerCase = section.name;
															sectionLowerCase.toLocaleLowerCase();
															return (
																<Option value={sectionLowerCase} key={i}>
																	{sectionLowerCase}
																</Option>
															);
														})} */}
						</Select>
					</Form.Item>
					<Form.Item
						noStyle
						shouldUpdate={(prevValues, currentValues) =>
							prevValues.section !== currentValues.section
						}
					>
						{({ getFieldValue }) =>
							getFieldValue("section") === "other" ? (
								<Form.Item
									name="customizeSection"
									label="Customize Section"
									//rules={!buttonName && [{ required: true }]}
								>
									<Input />
								</Form.Item>
							) : null
						}
					</Form.Item>
					<Form.Item
						name="description"
						label="Description"
						//rules={!buttonName && [{required: true}]}
					>
						<TextArea
							defaultValue={data ? data.description : ""}
							maxLength={102}
						/>
					</Form.Item>
					<Form.Item
						name="price"
						label="Price"
						//rules={!buttonName && [{ required: true }]}
					>
						<Input
							defaultValue={data ? data.price : ""}
							type="number"
							pattern="[0-9].,"
							suffix="EUR"
							min="0"
						/>

						{/* prefix="€" */}
					</Form.Item>
					<Form.Item name="allergens" label="Allergens">
						<Checkbox.Group
							style={{ width: "100%" }}
							onChange={onChange}
							// defaultValue={
							//   data && data.allergens && data.allergens.length
							//     ? data.allergens
							//     : ''
							// }
							// initialValue={
							// 	data && data.allegens ? data.allergens : ""
							// }
						>
							<Row>
								{allergenIcons.map((allergen, i) => {
									return (
										<Col span={8} key={i}>
											<Checkbox
												value={allergen.name}
												checked={true}
												// defaultChecked={[1]
												// // data &&
												// //   data.allergens.length &&
												// //   data.allergens.includes (allergen.name)
												// //   ? [allergen.id]
												// //   : []
												// }
											>
												{allergen.name}
											</Checkbox>
										</Col>
									);
								})}
							</Row>
						</Checkbox.Group>
					</Form.Item>
					<Form.Item name="diet" label="Diet">
						<Checkbox.Group
							style={{ width: "100%" }}
							onChange={onChange}
							//defaultValue={data && data.diet ? data.diet : ""}
						>
							<Row>
								<Col span={8}>
									<Checkbox value="vegan">Vegan</Checkbox>
								</Col>
								<Col span={8}>
									<Checkbox value="vegetarian">Vegetarian</Checkbox>
								</Col>
								<Col span={8}>
									<Checkbox value="healthy">Healthy</Checkbox>
								</Col>
							</Row>
						</Checkbox.Group>
					</Form.Item>
					<Form.Item name="type" label="Type">
						<Radio.Group onChange={onChange} style={{ width: "100%" }}>
							<Radio value="food">Food</Radio>
							<Radio value="beverage">Beverage</Radio>
						</Radio.Group>
					</Form.Item>
					<Form.Item name="spicy_level" label="Spicy Level">
						<Radio.Group onChange={onChange} style={{ width: "100%" }}>
							<Radio value="food">😋</Radio>
							<Radio value={1}>🌶️</Radio>
							<Radio value={2}>🌶️🌶️</Radio>
							<Radio value={3}>🌶️🌶️🌶️</Radio>
						</Radio.Group>
					</Form.Item>
					<Form.Item name="image" label="Image">
						{/* <UploadImage buttonName={buttonName ? "edit" : "new"} /> */}
					</Form.Item>
					<Form.Item {...tailLayout}>
						<div className="modal-tail">
							{/* <DeleteProduct
                          product={data}
                          closeProductWindow={handleCancel}
                        /> */}
							<Button type="primary" htmlType="submit" loading={loading}>
								Update Product
							</Button>
						</div>
					</Form.Item>
				</Form>
			</Modal>

			{/* );
					})}
			</Row> */}
		</div>
	);
}

export default EditProduct;
