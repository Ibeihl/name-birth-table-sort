import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
        this.people = [
            {
                name: "Jerry Garcia",
                birth: "8/1/1942"
            },
            {
                name: "Bob Weir",
                birth: "10/16/1947"
            },
            {
                name: "Phil Lesh",
                birth: "3/15/1940"
            },
            {
                name: "Bill Kreutzmann",
                birth: "5/7/1946"
            },
            {
                name: "Mickey Hart",
                birth: "9/11/1943"
            },
            {
                name: "Ron McKernan",
                birth: "9/8/1945"
            }
        ];
    };
    nameSort(a , b) {
        if(a.name < b.name) {
            return -1;
        } if (a.name > b.name) {
            return 1;
        } else {
            return 0;
        }
    }
    ageSort(a, b) {
        let aBirthArr = a.birth.split('/');
        let bBirthArr = b.birth.split('/');
        if(aBirthArr[2] < bBirthArr[2]) {
            return -1;
        } if(aBirthArr[2] > bBirthArr[2]) {
            return 1;
        } if(aBirthArr[1] < bBirthArr[1]) {
            return -1;
        } if(aBirthArr[1] > bBirthArr[1]) {
            return 1;
        } if(aBirthArr[0] < bBirthArr[0]) {
            return -1;
        } if(aBirthArr[0] > bBirthArr[0]) {
            return 1;
        } else {
            return 0;
        }
    }
    renderAge() {
        let sortedPeople = this.people.sort(this.ageSort);
        let ageTableElement = sortedPeople.map((person, index) => (
            <tr key={index}>
            <td>{person.name}</td>
            <td>{person.birth}</td>
        </tr>
        ));
        return ageTableElement;
    }

    renderName() {
        let sortedPeople = this.people.sort(this.nameSort);
        let nameTableElement = sortedPeople.map((person, index) => (
                <tr key={index}>
                    <td>{person.name}</td>
                    <td>{person.birth}</td>
                </tr>
        ));
        return nameTableElement;
    }

    render() {
        console.log(this.props);
        this.renderName();
        let people;
        if(this.props.state.sort === "name"){
            people = this.renderName();
        } else if (this.props.state.sort === "age") {
            people = this.renderAge();
        }

        return (
            <div className="table">
                <h2>This will be the table</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Birthday</th>
                        </tr>
                        {people}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;
