import "./TripPlanner.css";

export default function TripPlanner() {
    return (
        <div className="planner-wrap">

            <div className="planner-hero">
                <h1>Plan your perfect trip</h1>
                <p>Tell us your vibe. We’ll build the journey.</p>
            </div>

            <div className="planner-card">
                <div className="planner-grid">

                    <div className="field">
                        <label>From</label>
                        <input type="text" placeholder="Bengaluru" />
                    </div>

                    <div className="field">
                        <label>To</label>
                        <input type="text" placeholder="Maldives" />
                    </div>

                    <div className="field">
                        <label>Departure Date</label>
                        <input type="date" />
                    </div>

                    <div className="field">
                        <label>Return Date</label>
                        <input type="date" />
                    </div>

                    <div className="field">
                        <label>Time Preference</label>
                        <select>
                            <option>Anytime</option>
                            <option>Morning</option>
                            <option>Afternoon</option>
                            <option>Night</option>
                        </select>
                    </div>

                    <div className="field">
                        <label>People</label>
                        <input type="number" min="1" defaultValue="2" />
                    </div>

                    <div className="field">
                        <label>Package Type</label>
                        <select>
                            <option>Any</option>
                            <option>Budget</option>
                            <option>Luxury</option>
                            <option>Adventure</option>
                        </select>
                    </div>

                    <div className="field">
                        <label>Max Budget (₹)</label>
                        <input type="range" min="10000" max="200000" />
                    </div>

                    <div className="field">
                        <label>Minimum Rating</label>
                        <select>
                            <option>3+ ⭐</option>
                            <option>4+ ⭐</option>
                            <option>4.5+ ⭐</option>
                        </select>
                    </div>
                </div>

                <button className="search-btn">Find trips</button>
            </div>
        </div>
    );
}
