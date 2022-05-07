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
//import UploadImage from "./UploadImage";
import { checkProduct } from "./checkProduct";
import { useAppCtx } from "../context.tsx/Products";
import { AddProduct } from "./layout.styles";

const { Option } = Select;
const { TextArea } = Input;

const layout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 18 },
};
const tailLayout = {
	wrapperCol: { offset: 6, span: 18 },
};

export default function AddProductModal() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [form] = Form.useForm();
	const productContext = useAppCtx();

	//const { buttonName, updateProduct } = props;
	const [loading, setLoading] = useState(false);
	// const { menu } = props;

	// Add a product
	const onFinish = async (values: any) => {
		console.log(values);
		let verified = await checkProduct.add(values);
		console.log(verified);
		if (typeof verified !== "string") {
			productContext?.onProductCreated(verified);
		}
		await enterLoading();
		//	await handleOk();
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
		<div className="mt-2">
			<AddProduct
				onClick={showModal}
				style={{ padding: 0, width: 60, border: "none" }}
			>
				+
			</AddProduct>

			<Modal
				title={"Add Product"}
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				width={520}
				footer={null}
				confirmLoading={confirmLoading}
			>
				<Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
					<Form.Item
						name="name"
						label="Product Name"
						//rules={!buttonName && [{ required: true }]}
					>
						<Input maxLength={50} />
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
						<TextArea maxLength={102} />
					</Form.Item>
					<Form.Item
						name="price"
						label="Price"
						//rules={!buttonName && [{ required: true }]}
					>
						<Input type="number" pattern="[0-9].," suffix="EUR" min="0" />

						{/* prefix="€" */}
					</Form.Item>
					<Form.Item name="allergens" label="Allergens">
						<Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
							<Row>
								{allergenIcons.map((allergen, i) => {
									return (
										<Col span={8} key={i}>
											<Checkbox value={allergen.name} checked={true}>
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
						<Radio.Group
							onChange={onChange}
							style={{ width: "100%" }}
							defaultValue="food"
						>
							<Radio value="food" defaultChecked>
								Food
							</Radio>
							<Radio value="beverage">Beverage</Radio>
						</Radio.Group>
					</Form.Item>
					<Form.Item name="spicy_level" label="Spicy Level">
						<Radio.Group
							onChange={onChange}
							style={{ width: "100%" }}
							defaultValue={0}
						>
							<Radio value={0} defaultChecked>
								😋
							</Radio>
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
								Add Product
							</Button>
						</div>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
}
