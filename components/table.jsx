'use client'
import { Cell } from './cell';
import { Row } from './row';
import { createSwapy, utils } from 'swapy';
import { useRef, useEffect} from 'react';

function convertMinutesToTime(minutes) {
    const hours = (Math.floor(minutes / 60)<10) ? '0' + Math.floor(minutes / 60).toString() : Math.floor(minutes / 60);
    const mins = (minutes % 60 < 10) ? '0' + (minutes % 60).toString() : minutes % 60;
    return `${hours}:${mins}`;
}

export function Table({teachers, startTime, numberOfLessons, period, delay = 0}) {
    const swapy = useRef(null);
    const container = useRef(null);

    useEffect(() => {
        if(!container.current) return;
        swapy.current = createSwapy(container.current, {
            swapMode: 'drop'
        })

        return () => {
            swapy.current?.destroy()
        }
    },[]);

    return (
    <table >
        <tbody className="border border-(--foreground)" ref={container}>
            <tr className="border border-(--foreground)">
                <td className="border border-(--foreground)"><div className='resize'></div></td>
                {teachers.map((teacher) => {
                    return <td key={teacher} className="border border-(--foreground) px-2"><div className="resize">{teacher}</div></td>
                })}
            </tr>  
            {/* {Array.fill(0,tableData.startTime,tableData.endTime).forEach((time) => {
                return <Row>
                    <Cell>{time}</Cell>
                    {tableData.teachers.forEach((teacher) => {
                        return <Cell></Cell>
                    })}
                </Row>
            })} */}
            { Array(numberOfLessons).fill(0).map((_, r_i) => {
                return <Row key={r_i} className="border border-(--foreground) container">
                    <td className="border border-(--foreground) px-1"><div className='resize'>{convertMinutesToTime(startTime + r_i*period + r_i*delay)}-{convertMinutesToTime(startTime + (r_i+1)*period + (r_i+1)*delay)}</div></td>
                    {teachers.map((teacher,c_i) => {
                        return <Cell className="border border-(--foreground)" key={teacher} slot={r_i.toString()+c_i.toString()}/>
                    })}
                </Row>
            })}
        </tbody>    
    </table>)
}