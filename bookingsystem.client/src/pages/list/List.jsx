import "./list.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header.jsx";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';


const List = () => {
    const location = useLocation();

    console.log(location)
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="lsItem">
                            <label>Check-in Date</label>
                            <span onClick={()=>setOpenDate(!openDate)}>{`${format(
                                date[0].startDate,
                                "dd/MM/yyyy")}
                                to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                            </span>
                            {openDate && (< DateRange
                                onChange={(item) => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                            />
                            )}
                        </div>
                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Min price <small>per night</small>
                                    </span>
                                    <input className="lsOptionInput" type="number"></input>
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Max price <small>per night</small>
                                    </span>
                                    <input className="lsOptionInput" type="number"></input>
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Adult</span>
                                    <input className="lsOptionInput" min={1} type="number" placeholder={ options.adult }/>
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Children</span>
                                    <input className="lsOptionInput" min={0} type="number" placeholder={options.children}/>
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Room</span>
                                    <input className="lsOptionInput" min={1} type="number" placeholder={options.room}></input>
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div> 
                    <div className="listResult">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;

