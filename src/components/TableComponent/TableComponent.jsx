import { Table } from 'antd';
import 'antd/dist/reset.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentRoute, WATCH_NEW_POLYLINE } from '../../services/actions/cargo';

export default function TableComponent () {
    const dispatch = useDispatch();
    const currentrequests = useSelector(store => store.cargo.requestsList);

    const columns = [
        {
            title: 'Номер заявки',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Координаты ОТ lat',
            dataIndex: 'coordsFromLat',
            key: 'coordsFromLat',
        },
        {
            title: 'Координаты ОТ lng',
            dataIndex: 'coordsFromIng',
            key: 'coordsFromIng',
        },
        {
            title: 'Координаты ДО lat',
            dataIndex: 'coordsToLat',
            key: 'coordsToLat',
        },
        {
            title: 'Координаты ДО lng',
            dataIndex: 'coordsToIng',
            key: 'coordsToIng',
        },
    ];

    const handleHover = (item) => {
        dispatch(addCurrentRoute(item));
        dispatch({ type: WATCH_NEW_POLYLINE, currentRoutes: [item.coordsFromLat, item.coordsFromIng, item.coordsToLat, item.coordsToIng] });
    }

    return (
        <Table 
            dataSource={currentrequests} 
            columns={columns}              
            pagination={false}
            size={'small'} 
            rowKey='number' 
            onRow={(record, rowIndex) => {
                return {                                    
                    onMouseEnter: (event) => {handleHover(record)},
                };   
            }}       
        />    
    )
}
