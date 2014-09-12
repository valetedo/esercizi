function complex(re,im)
{ this.re = re;
    this.im = im;

    complex.prototype.sum = function(number){
        return new complex(this.re+number.re,this.im+number.im);
    };

    complex.prototype.diff = function(number){
        return new complex(this.re-number.re,this.im-number.im);
    };

    complex.prototype.molt = function(number){
        return new complex(this.re*number.re-this.im*number.im,this.re*number.im+this.im*number.re);
    };

    complex.prototype.div = function(number){
        return new complex((this.re*number.re+this.im*number.im)/(number.re*number.re+number.im*number.im),(this.im*number.re-this.re*number.im)/(number.re*number.re+number.im*number.im));
    };

    complex.prototype.con = function(){
        return new complex(this.re,-this.im);
    };

    complex.prototype.mod = function(){
        return(this.re*this.re+this.im*this.im);
    };

}

module.exports.complex = complex;
