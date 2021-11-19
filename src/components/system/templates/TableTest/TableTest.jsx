// /** @jsx jsx */
// import { jsx } from 'theme-ui'
import React from 'react'
//
// import {
// 	useTable,
// 	useResizeColumns,
// 	useFlexLayout,
// 	useRowSelect,
// } from 'react-table'

// function TableTest(props) {
// 	const data = React.useMemo(
// 		() => [
// 			{
// 				col1: 'Row 1',
// 				col2: 'Row 1',
// 				col3:
// 					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.',
// 			},
// 			{
// 				col1: 'Row 2',
// 				col2: 'Row 2',
// 				col3:
// 					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.',
// 			},
// 			{
// 				col1: 'Row 3',
// 				col2: 'Row 3',
// 				col3:
// 					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.',
// 			},
// 		],
// 		[]
// 	)

// 	const columns = React.useMemo(
// 		() => [
// 			{
// 				Header: 'Column A',
// 				accessor: 'col1', // accessor is the "key" in the data
// 			},
// 			{
// 				Header: 'Column B',
// 				accessor: 'col2',
// 			},
// 			{
// 				Header: 'Column C',
// 				accessor: 'col3',
// 			},
// 		],
// 		[]
// 	)

// 	const {
// 		getTableProps,
// 		getTableBodyProps,
// 		headerGroups,
// 		rows,
// 		prepareRow,
// 	} = useTable({ columns, data })

// 	return (
// 		<table
// 			{...getTableProps()}
// 			{...props}
// 			sx={{
// 				width: '100%',
// 			}}
// 		>
// 			<thead>
// 				{headerGroups.map((headerGroup) => (
// 					<tr {...headerGroup.getHeaderGroupProps()}>
// 						{headerGroup.headers.map((column) => (
// 							<th
// 								{...column.getHeaderProps()}
// 								{...props}
// 								sx={{
// 									color: 'primary',
// 								}} // style={{
// 								// 	borderBottom: 'solid 3px red',
// 								// 	background: 'aliceblue',
// 								// 	color: 'black',
// 								// 	fontWeight: 'bold',
// 								// }}
// 							>
// 								{column.render('Header')}
// 							</th>
// 						))}
// 					</tr>
// 				))}
// 			</thead>
// 			<tbody {...getTableBodyProps()}>
// 				{rows.map((row) => {
// 					prepareRow(row)
// 					return (
// 						<tr {...row.getRowProps()}>
// 							{row.cells.map((cell) => {
// 								return (
// 									<td
// 										{...cell.getCellProps()}
// 										style={{
// 											padding: '10px',
// 											border: 'solid 1px gray',
// 											background: 'papayawhip',
// 										}}
// 									>
// 										{cell.render('Cell')}
// 									</td>
// 								)
// 							})}
// 						</tr>
// 					)
// 				})}
// 			</tbody>
// 		</table>
// 	)
// }
/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import styled from '@emotion/styled'
import {
	useTable,
	useResizeColumns,
	useFlexLayout,
	useRowSelect,
} from 'react-table'

const Styles = styled.div`
	padding: 1rem;
	${'' /* These styles are suggested for the table fill all available space in its containing element */}
	display: block;
	${'' /* These styles are required for a horizontaly scrollable table overflow */}
	overflow: auto;

	.table {
		border-spacing: 0;
		border: 1px solid black;

		.thead {
			${'' /* These styles are required for a scrollable body to align with the header properly */}
			overflow-y: auto;
			overflow-x: hidden;
		}

		.tbody {
			${'' /* These styles are required for a scrollable table body */}
			overflow-y: scroll;
			overflow-x: hidden;
			height: 250px;
		}

		.tr {
			:last-child {
				.td {
					border-bottom: 0;
				}
			}
			border-bottom: 1px solid black;
		}

		.th,
		.td {
			margin: 0;
			padding: 0.5rem;
			border-right: 1px solid black;

			${'' /* In this example we use an absolutely position resizer,
       so this is required. */}
			position: relative;

			:last-child {
				border-right: 0;
			}

			.resizer {
				right: 0;
				background: blue;
				width: 10px;
				height: 100%;
				position: absolute;
				top: 0;
				z-index: 1;
				${'' /* prevents from scrolling while dragging on touch devices */}
				touch-action :none;

				&.isResizing {
					background: red;
				}
			}
		}
	}
`

const headerProps = (props, { column }) => getStyles(props, column.align)

const cellProps = (props, { cell }) => getStyles(props, cell.column.align)

const getStyles = (props, align = 'left') => [
	props,
	{
		style: {
			justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
			alignItems: 'flex-start',
			display: 'flex',
		},
	},
]

const IndeterminateCheckbox = React.forwardRef(
	({ indeterminate, ...rest }, ref) => {
		const defaultRef = React.useRef()
		const resolvedRef = ref || defaultRef

		React.useEffect(() => {
			resolvedRef.current.indeterminate = indeterminate
		}, [resolvedRef, indeterminate])

		return (
			<>
				<input type='checkbox' ref={resolvedRef} {...rest} />
			</>
		)
	}
)

function Table({ columns, data }) {
	const defaultColumn = React.useMemo(
		() => ({
			// When using the useFlexLayout:
			minWidth: 30, // minWidth is only used as a limit for resizing
			width: 150, // width is used for both the flex-basis and flex-grow
			maxWidth: 200, // maxWidth is only used as a limit for resizing
		}),
		[]
	)

	const { getTableProps, headerGroups, rows, prepareRow } = useTable(
		{
			columns,
			data,
			defaultColumn,
		},
		useResizeColumns,
		useFlexLayout,
		useRowSelect,
		(hooks) => {
			hooks.allColumns.push((columns) => [
				// Let's make a column for selection
				{
					id: 'selection',
					disableResizing: true,
					minWidth: 35,
					width: 35,
					maxWidth: 35,
					// The header can use the table's getToggleAllRowsSelectedProps method
					// to render a checkbox
					Header: ({ getToggleAllRowsSelectedProps }) => (
						<div>
							<IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
						</div>
					),
					// The cell can use the individual row's getToggleRowSelectedProps method
					// to the render a checkbox
					Cell: ({ row }) => (
						<div>
							<IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
						</div>
					),
				},
				...columns,
			])
			hooks.useInstanceBeforeDimensions.push(({ headerGroups }) => {
				// fix the parent group of the selection button to not be resizable
				const selectionGroupHeader = headerGroups[0].headers[0]
				selectionGroupHeader.canResize = false
			})
		}
	)

	return (
		<div {...getTableProps()} className='table'>
			<div>
				{headerGroups.map((headerGroup) => (
					<div
						{...headerGroup.getHeaderGroupProps({
							// style: { paddingRight: '15px' },
						})}
						className='tr'
					>
						{headerGroup.headers.map((column) => (
							<div {...column.getHeaderProps(headerProps)} className='th'>
								{column.render('Header')}
								{/* Use column.getResizerProps to hook up the events correctly */}
								{column.canResize && (
									<div
										{...column.getResizerProps()}
										className={`resizer ${
											column.isResizing ? 'isResizing' : ''
										}`}
									/>
								)}
							</div>
						))}
					</div>
				))}
			</div>
			<div className='tbody'>
				{rows.map((row) => {
					prepareRow(row)
					return (
						<div {...row.getRowProps()} className='tr'>
							{row.cells.map((cell) => {
								return (
									<div {...cell.getCellProps(cellProps)} className='td'>
										{cell.render('Cell')}
									</div>
								)
							})}
						</div>
					)
				})}
			</div>
		</div>
	)
}

function TableTest(props) {
	const data = React.useMemo(
		() => [
			{
				col1: 'Row 1',
				col2: 'Row 1',
				col3:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.',
			},
			{
				col1: 'Row 2',
				col2: 'Row 2',
				col3:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.',
			},
			{
				col1: 'Row 3',
				col2: 'Row 3',
				col3:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.',
			},
		],
		[]
	)

	const columns = React.useMemo(
		() => [
			{
				Header: 'Column A',
				accessor: 'col1', // accessor is the "key" in the data
			},
			{
				Header: 'Column B',
				accessor: 'col2',
			},
			{
				Header: 'Column C',
				accessor: 'col3',
			},
		],
		[]
	)

	// const data = React.useMemo(
	// 		() => [
	// 			{
	// 				col1: 'Row 1',
	// 				col2: 'Row 1',
	// 				col3:
	// 					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.',
	// 			},
	// 			{
	// 				col1: 'Row 2',
	// 				col2: 'Row 2',
	// 				col3:
	// 					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.',
	// 			},
	// 			{
	// 				col1: 'Row 3',
	// 				col2: 'Row 3',
	// 				col3:
	// 					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.',
	// 			},
	// 		],
	// 		[]
	// 	)

	// 	const columns = React.useMemo(
	// 		() => [
	// 			{
	// 				Header: 'Column A',
	// 				accessor: 'col1', // accessor is the "key" in the data
	// 			},
	// 			{
	// 				Header: 'Column B',
	// 				accessor: 'col2',
	// 			},
	// 			{
	// 				Header: 'Column C',
	// 				accessor: 'col3',
	// 			},
	// 		],
	// 		[]
	// 	)

	return (
		<Styles>
			<Table columns={columns} data={data} />
		</Styles>
	)
}

TableTest.propTypes = {}

TableTest.defaultProps = {}

export default TableTest
