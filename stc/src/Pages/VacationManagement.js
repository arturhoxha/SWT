import logo from '../img/STC-01.png';
import '../css/VacationManagement.css';

export default function VacationManagement() {
    return (
        <div id="page">
            <div id="mainFrame">
                <img src={logo} id="logo" alt="Firmenlogo" />
                <h1 id="title">Vacation Management</h1>
                
                {/* Urlaubsantrag Formular */}
                <form id="vacationForm">
                    <input type="text" name="Employee Name" placeholder="Employee Name" required />
                    <input type="date" name="Start Date" placeholder="Start Date" required />
                    <input type="date" name="End Date" required />
                    <textarea name="Reason" placeholder="Reason for Vacation" rows="4" required></textarea>
                    <input type="submit" id="submit" value="Submit Request" />
                </form>

                {/* Liste der bestehenden Urlaubsanträge */}
                <div id="vacationList">
                    <h2>Existing Vacation Requests</h2>
                    <div className="request">
                        <p><strong>Employee:</strong> John Doe</p>
                        <p><strong>Start Date:</strong> 2024-05-01</p>
                        <p><strong>End Date:</strong> 2024-05-07</p>
                        <p><strong>Reason:</strong> Family vacation</p>
                    </div>
                    {/* Weitere Anträge können hier hinzugefügt werden */}
                </div>
            </div>
        </div>
        /*<div id="page">
            <div id="mainFrame">
                <div id="top">
                    <img src={logo} alt="Firmenlogo" id="logo" />
                    <h1>Vacation Management</h1>
                </div>
                <div className="table">
                    <div className="table-row">
                        <div className="table-cell">
                        <span class="material-symbols-outlined">person</span>
                        </div>
                        <form className="table-cell">
                            <input type="text" autoComplete='true' required placeholder='Name' />
                            <input type="text" autoComplete='true' required placeholder='Birthday' />
                            <input type="text" autoComplete='true' required placeholder='ID' />
                            <input type="text" autoComplete='true' required placeholder='Area' />
                        </form>
                    </div>
                    <div className="table-row">
                        <div className="table-cell">
                        <span class="material-symbols-outlined">person</span>
                        </div>
                        <form className="table-cell">
                            <input type="text" />
                        </form>
                        <form className="table-cell">
                            <input type="text" />
                        </form>
                        <form className="table-cell">
                            <input type="text" />
                        </form>
                        <form className="table-cell">
                            <input type="text" />
                        </form>
                    </div>
                    <div className="table-row">
                        <div className="table-cell">
                        <span class="material-symbols-outlined">person</span>
                        </div>
                        <form className="table-cell">
                            <input type="text" />
                        </form>
                        <form className="table-cell">
                            <input type="text" />
                        </form>
                        <form className="table-cell">
                            <input type="text" />
                        </form>
                        <form className="table-cell">
                            <input type="text" />
                        </form>
                    </div>
                </div>
            </div>
        </div>*/
    );
}