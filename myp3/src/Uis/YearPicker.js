import '../css/UniversalCss.css';

const YearPicker = ()=> {
    return (
        <div>
            <div className='flex'>
                <label><h2>Filter By Year</h2></label>
                <select>
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                </select>
            </div>
        </div>
    );
}

export default YearPicker;