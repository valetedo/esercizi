var complex = require('/home/valentina/complex.js').complex;
var assert = require('assert');
var should = require('should');
describe("complex", function() {
   describe(".mod()", function() {
       it("modulo", function(){
        var num = new complex(3,5);
        var result = num.mod();
        assert.equal(34,result);
               });
   });
   describe(".sum(number)",function(){
       it("somma",function(){
        var num = new complex(4,6);
        var num2 = new complex(6,4);
        var result = num.sum(num2);
        
        result.should.have.property('re',10);
        result.should.have.property('im',10);
       });
   });
    describe(".diff(number)",function(){
       it("differenza",function(){
        var num = new complex(4,6);
        var num2 = new complex(6,4);
        var result = num.diff(num2);
       
        result.should.have.property('re',-2);
        result.should.have.property('im',2);
       });
   });
    describe(".con()",function(){
       it("coniugato",function(){
        var num = new complex(4,6);
        var result = num.con();
       
        result.should.have.property('re',4);
        result.should.have.property('im',-6);
       });
   });
    describe(".molt(number)",function(){
       it("moltiplicazione",function(){
        var num = new complex(4,6);
        var num2 = new complex(3,5);
        var result = num.molt(num2);
       
        result.should.have.property('re',-18);
        result.should.have.property('im',38);
       });
   });
describe(".div(number)",function(){
       it("divisione",function(){
        var num = new complex(4,6);
        var num2 = new complex(3,5);
        var result = num.div(num2);
       
        result.should.have.property('re',42/34);
        result.should.have.property('im',-2/34);
       });
   });


});
