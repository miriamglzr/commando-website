import { NextApiRequest, NextApiResponse } from "next";

export type Table = string;

globalThis.tables = globalThis.tables ?? ["1", "2", "3", "4", "5"];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const table = req.body;

	if (req.method === "POST") {
		globalThis.tables.push(table.id);
	}

	// Always return a list of the people
	res.status(200).json(globalThis.tables);
}
