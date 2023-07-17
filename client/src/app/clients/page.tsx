"use client";
import { Menubar } from "primereact/menubar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";
import { ClientService, Client } from "../../data/clients";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";

export default function Home() {
	const items = [
		{
			label: "File",
			icon: "pi pi-fw pi-file",
			items: [
				{
					label: "Delete",
					icon: "pi pi-fw pi-trash",
				},
				{
					separator: true,
				},
				{
					label: "Export",
					icon: "pi pi-fw pi-external-link",
				},
			],
		},
		{
			label: "Edit",
			icon: "pi pi-fw pi-pencil",
			items: [
				{
					label: "Left",
					icon: "pi pi-fw pi-align-left",
				},
				{
					label: "Right",
					icon: "pi pi-fw pi-align-right",
				},
				{
					label: "Center",
					icon: "pi pi-fw pi-align-center",
				},
				{
					label: "Justify",
					icon: "pi pi-fw pi-align-justify",
				},
			],
		},
		{
			label: "Users",
			icon: "pi pi-fw pi-user",
			items: [
				{
					label: "New",
					icon: "pi pi-fw pi-user-plus",
				},
				{
					label: "Delete",
					icon: "pi pi-fw pi-user-minus",
				},
				{
					label: "Search",
					icon: "pi pi-fw pi-users",
					items: [
						{
							label: "Filter",
							icon: "pi pi-fw pi-filter",
							items: [
								{
									label: "Print",
									icon: "pi pi-fw pi-print",
								},
							],
						},
						{
							icon: "pi pi-fw pi-bars",
							label: "List",
						},
					],
				},
			],
		},
		{
			label: "Events",
			icon: "pi pi-fw pi-calendar",
			items: [
				{
					label: "Edit",
					icon: "pi pi-fw pi-pencil",
					items: [
						{
							label: "Save",
							icon: "pi pi-fw pi-calendar-plus",
						},
						{
							label: "Delete",
							icon: "pi pi-fw pi-calendar-minus",
						},
					],
				},
				{
					label: "Archive",
					icon: "pi pi-fw pi-calendar-times",
					items: [
						{
							label: "Remove",
							icon: "pi pi-fw pi-calendar-minus",
						},
					],
				},
			],
		},
		{
			label: "Quit",
			icon: "pi pi-fw pi-power-off",
		},
	];
	const end = <p className="mr-6 text-xl font-semibold">Classmates</p>;
	
	const [globalFilterValue, setGlobalFilterValue] = useState("");
	const [filters, setFilters] = useState({
		global: { value: null, matchMode: FilterMatchMode.CONTAINS },
		first_name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
		last_name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
		visits: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
	});

	const [clients, setClients] = useState<Client[]>([]);

	useEffect(() => {
		ClientService.getClientData().then((data) => setClients(data));
	}, []);

	const onGlobalFilterChange = (e: any) => {
		const value = e.target.value;
		let _filters = { ...filters };

		_filters["global"].value = value;

		setFilters(_filters);
		setGlobalFilterValue(value);
	};

	const renderHeader = () => {
		return (
			<div className="flex justify-content-end">
				<span className="p-input-icon-left">
					<i className="pi pi-search" />
					<InputText
						value={globalFilterValue}
						onChange={onGlobalFilterChange}
						placeholder="Keyword Search"
					/>
				</span>
			</div>
		);
	};

	const header = renderHeader();

	const handleHealthNumber = (client: Client) => {
		if (!client.client_id) {
            return <span>-</span>
        }

        return (
            <>
				<div>
					<a href={`localhost:3000/${client.version_code}`} target="_blank" className="hover:text-sky-400">
						{client.client_id}
					</a>
				</div>
            </>
        );
	}

	return (
		<main>
			<Menubar model={items} className="m-4" end={end} />
			<DataTable
				value={clients}
				size="small"
				showGridlines
				stripedRows
				tableStyle={{}}
				className="m-4"
				filters={filters}
				paginator
				rows={5}
				rowsPerPageOptions={[5, 10, 25]}
				header={header}
			>
				<Column field="client_id" header="Health Number" style={{ maxWidth: '4rem' }} body={handleHealthNumber}/>
				<Column field="version_code" header="Version Code" style={{ maxWidth: '2rem' }}/>
				<Column field="first_name" header="First Name" sortable style={{ maxWidth: '4rem' }} />
				<Column field="last_name" header="Last Name" sortable style={{ maxWidth: '4rem' }} />
				<Column field="visits" header="No. Of Visits" sortable />
			</DataTable>
		</main>
	);
}
