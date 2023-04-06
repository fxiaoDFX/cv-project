export default function EducationCard() {
    return (
        <div>
            <div style={{ border: "2px solid black" }}>
                Education
                <input type="text" placeholder="School name" />
                <input type="text" placeholder="City" />
                <label htmlFor="graduation-year">
                    Enter Graduation Year:
                    <input type="number" id="graduation-year" />
                </label>
            </div>
        </div>
    )
}
