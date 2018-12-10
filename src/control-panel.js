import React, {Component} from 'react';
import { Checkbox } from 'semantic-ui-react'

const defaultContainer =  ({children}) => <div className="control-panel">{children}</div>;

const locationValues = {'APARTMENT': 0, 'RESIDENCE': 1, 'STREET': 2, 'SIDEWALK': 3, 'CHA HALLWAY/STAIRWELL/ELEVATOR': 4, 'RESIDENCE PORCH/HALLWAY': 5, 'VEHICLE NON-COMMERCIAL': 6, 'OTHER': 7, 'RESIDENCE-GARAGE': 8, 'VEHICLE-COMMERCIAL': 9, 'PARKING LOT/GARAGE(NON.RESID.)': 10, 'SCHOOL, PUBLIC, GROUNDS': 11, 'CHA PARKING LOT/GROUNDS': 12, 'MEDICAL/DENTAL OFFICE': 13, 'RESTAURANT': 14, 'SMALL RETAIL STORE': 15, 'CTA TRAIN': 16, 'SCHOOL, PUBLIC, BUILDING': 17, 'HOSPITAL BUILDING/GROUNDS': 18, 'DRUG STORE': 19, 'RESIDENTIAL YARD (FRONT/BACK)': 20, 'GROCERY FOOD STORE': 21, nan: 22, 'COLLEGE/UNIVERSITY GROUNDS': 23, 'BANK': 24, 'BAR OR TAVERN': 25, 'ATHLETIC CLUB': 26, 'SPORTS ARENA/STADIUM': 27, 'PARK PROPERTY': 28, 'NURSING HOME/RETIREMENT HOME': 29, 'ATM (AUTOMATIC TELLER MACHINE)': 30, 'COMMERCIAL / BUSINESS OFFICE': 31, 'ALLEY': 32, 'VACANT LOT/LAND': 33, 'GAS STATION': 34, 'POLICE FACILITY/VEH PARKING LOT': 35, 'HOTEL/MOTEL': 36, 'LIBRARY': 37, 'TAXICAB': 38, 'SCHOOL, PRIVATE, GROUNDS': 39, 'HIGHWAY/EXPRESSWAY': 40, 'CONVENIENCE STORE': 41, 'TAVERN/LIQUOR STORE': 42, 'ABANDONED BUILDING': 43, 'CTA BUS': 44, 'DEPARTMENT STORE': 45, 'CTA STATION': 46, 'CTA PLATFORM': 47, 'OTHER COMMERCIAL TRANSPORTATION': 48, 'CHA APARTMENT': 49, 'ANIMAL HOSPITAL': 50, 'DRIVEWAY - RESIDENTIAL': 51, 'BARBERSHOP': 52, 'CHURCH/SYNAGOGUE/PLACE OF WORSHIP': 53, 'SCHOOL, PRIVATE, BUILDING': 54, 'YARD': 55, 'GOVERNMENT BUILDING/PROPERTY': 56, 'AIRPORT/AIRCRAFT': 57, 'CTA GARAGE / OTHER PROPERTY': 58, 'AIRPORT TERMINAL LOWER LEVEL - NON-SECURE AREA': 59, 'CURRENCY EXCHANGE': 60, 'AIRPORT TERMINAL UPPER LEVEL - SECURE AREA': 61, 'VEHICLE - OTHER RIDE SERVICE': 62, 'WAREHOUSE': 63, 'CONSTRUCTION SITE': 64, 'CTA BUS STOP': 65, 'DAY CARE CENTER': 66, 'PAWN SHOP': 67, 'MOVIE HOUSE/THEATER': 68, 'AIRPORT EXTERIOR - NON-SECURE AREA': 69, 'CAR WASH': 70, 'OTHER RAILROAD PROP / TRAIN DEPOT': 71, 'POOL ROOM': 72, 'AUTO': 73, 'AIRPORT BUILDING NON-TERMINAL - NON-SECURE AREA': 74, 'AIRPORT BUILDING NON-TERMINAL - SECURE AREA': 75, 'BRIDGE': 76, 'APPLIANCE STORE': 77, 'CLEANING STORE': 78, 'HOUSE': 79, 'VEHICLE - DELIVERY TRUCK': 80, 'AIRPORT PARKING LOT': 81, 'FIRE STATION': 82, 'AIRPORT VENDING ESTABLISHMENT': 83, 'LAKEFRONT/WATERFRONT/RIVERBANK': 84, 'COLLEGE/UNIVERSITY RESIDENCE HALL': 85, 'CREDIT UNION': 86, 'AIRPORT TERMINAL MEZZANINE - NON-SECURE AREA': 87, 'FEDERAL BUILDING': 88, 'AIRPORT TERMINAL LOWER LEVEL - SECURE AREA': 89, 'FACTORY/MANUFACTURING BUILDING': 90, 'PORCH': 91, 'AIRPORT EXTERIOR - SECURE AREA': 92, 'SAVINGS AND LOAN': 93, 'JAIL / LOCK-UP FACILITY': 94, 'PARKING LOT': 95, 'AIRCRAFT': 96, 'AIRPORT TERMINAL UPPER LEVEL - NON-SECURE AREA': 97, 'BOAT/WATERCRAFT': 98, 'BARBER SHOP/BEAUTY SALON': 99, 'COIN OPERATED MACHINE': 100, 'AIRPORT TRANSPORTATION SYSTEM (ATS)': 101, 'CEMETARY': 102, 'FOREST PRESERVE': 103, 'BOWLING ALLEY': 104, 'CTA TRACKS - RIGHT OF WAY': 105, 'NEWSSTAND': 106, 'DELIVERY TRUCK': 107, 'GARAGE': 108, 'HOSPITAL': 109, 'ELEVATOR': 110, 'RAILROAD PROPERTY': 111, 'HALLWAY': 112, 'RETAIL STORE': 113, 'CLEANERS/LAUNDROMAT': 114, 'VACANT LOT': 115, 'EXPRESSWAY EMBANKMENT': 116, 'GAS STATION DRIVE/PROP.': 117, 'PUBLIC HIGH SCHOOL': 118, 'TAXI CAB': 119, 'GANGWAY': 120, 'LIQUOR STORE': 121, 'CHA PARKING LOT': 122, 'BASEMENT': 123, 'HOTEL': 124, 'VESTIBULE': 125, 'SCHOOL YARD': 126, 'CHURCH PROPERTY': 127, 'GARAGE/AUTO REPAIR': 128, 'CTA "L" PLATFORM': 129, 'CLUB': 130, 'MOTEL': 131, 'TAVERN': 132, 'STAIRWELL': 133, 'NURSING HOME': 134, 'DRIVEWAY': 135, 'GOVERNMENT BUILDING': 136, 'OFFICE': 137, 'TRUCK': 138, 'POOLROOM': 139, 'CTA "L" TRAIN': 140, 'LAUNDRY ROOM': 141, 'LAGOON': 142}

export default class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
          locationValue: 'Location Description',
          arrestValue: 'True',
          domesticValue: 'True',
          yearValue: '2017'
        };
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleArrestChange = this.handleArrestChange.bind(this)
        this.handleDomesticChange = this.handleDomesticChange.bind(this)
      }
      handleLocationChange(event) {
          this.setState({locationValue:event.target.value})
      }
      handleArrestChange(event) {
        this.setState({arrestValue:event.target.value})
      }
      handleDomesticChange(event) {
        this.setState({domesticValue:event.target.value})
      }
      handlePredict(event) {
          console.log("MAKE A PREDICTION")
      }
      renderOption = (option, index) => {
        return(
          <option
            key={index}
            value={option}>
            {option}
            </option>
        );
      }
  render() {
    const Container = this.props.containerComponent || defaultContainer;
    return (
      <Container>
        <h3>PREDICT THE CRIME COMMITTED</h3>
        <p>Select Options</p>
        Latitude:<input type="text" value={this.props.lat}/><br />
        Longitude: <input type="text" value={this.props.lon}/><br />
        <label>
        Location Description:
        <select value={this.state.locationValue} onChange={this.handleLocationChange}>
            {Object.keys(locationValues).map(this.renderOption)}
          </select></label><br />
          Arrest Made: <br/>
          <Checkbox
            radio
            label='Yes'
            name='checkboxRadioGroup'
            value='True'
            checked={this.state.arrestValue === 'True'}
            onChange={this.handleArrestChange}
          />
         <Checkbox
            radio
            label='No'
            name='checkboxRadioGroup'
            value='False'
            checked={this.state.arrestValue === 'False'}
            onChange={this.handleArrestChange}
          />
          Domestic Dispute: <br/>
          <Checkbox
            radio
            label='Yes'
            name='checkboxRadioGroup'
            value='True'
            checked={this.state.domesticValue === 'True'}
            onChange={this.handleDomesticChange}
          />
         <Checkbox
            radio
            label='No'
            name='checkboxRadioGroup'
            value='False'
            checked={this.state.domesticValue === 'False'}
            onChange={this.handleDomesticChange}
          />
        <button onClick={this.handlePredict}>
            PREDICT
            </button>
    
        <hr />

      </Container>
    );
  }
}