
let student = {
            name : 'srinu',
            rollNumber : 086310445,
            fee:25000,
            feePaid: 20000,
            college : 'HVA',
            skills : ['c', 'c++', 'javascript', 'html', 'css'],
            address : {
                        street: 'masjeed acceptsLanguages',
                        city:'hyderabad',
                        hNo:'2-18'
                        },
            getFeeStatus : function(){

                                        if(this.fee !== this.feePaid)
                                        {
                                                return "pending"
                                        }
                                        else
                                        {
                                                return "paid"
                                        }

            }

}
//console.log("college of the student is", student.college)
//console.log("city of student", student.address.hNo)
//console.log("student name :", student.name)
console.log("fee status:", student.getFeeStatus())