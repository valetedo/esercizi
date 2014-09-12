function Matrix(row,col,init)
{
    this.row = row;
    this.col = col;


    multiArray = new Array(this.row);
    for(var i=0;i<this.row;i++)
    {
        multiArray[i]=new Array(this.col);
    }
    for(var j = 0;j<this.row;j++)
    { 
        for(var z = 0;z<this.col;z++)
        {
            multiArray[j][z] = init;
        }
    }

    this.multiArray = multiArray;

    Matrix.prototype.sumMatrix = function(matrix){

        if (this.row == matrix.row && this.col == matrix.col)
            {  
                resultMatrix = new Matrix(this.row,this.col,0);
                that = this.multiArray;

                for(var i = 0; i<this.row; i++)
                {
                    for(var j = 0;j<this.col;j++)
                    {
                        resultMatrix.multiArray[i][j]= that[i][j]+matrix.multiArray[i][j];
                    }
                }
                return resultMatrix;
            }
    };

    Matrix.prototype.diffMatrix = function(matrix){

        if (this.row == matrix.row && this.col == matrix.col)
            { 
                resultMatrix = new Matrix(this.row,this.col,0);
                that = this.multiArray;

                for(var i = 0; i<this.row; i++)
                {
                    for(var j = 0;j<this.col;j++)
                    {
                        resultMatrix.multiArray[i][j]= that[i][j]-matrix.multiArray[i][j];
                    }
                }
                return resultMatrix;
            }
    };

    Matrix.prototype.moltMatrix = function(matrix){
        if (this.col == matrix.row)
            {
                resultMatrix = new Matrix(this.row,matrix.col,0);
                that = this.multiArray;

                for (var i = 0;i<this.row;i++){
                    for(var j=0;j<matrix.col;j++){
                        for(var z = 0;z<this.col;z++)

                        {
                            resultMatrix.multiArray[i][j]= resultMatrix.multiArray[i][j] +(that[i][z]*matrix.multiArray[z][j]);
                        }

                    }
                }

                return resultMatrix;
            }


    };

    Matrix.prototype.moltMatrixScal = function(number){


        resultMatrix = new Matrix(this.row,this.col,0);

        var that = this.multiArray;

        for(var i = 0; i<this.row; i++)
        {
            for(var j = 0;j<this.col;j++)
            {
                resultMatrix.multiArray[i][j]= that[i][j]*number;

            }
        }

        return resultMatrix;



    };


    Matrix.prototype.divMatrix = function(number){

        resultMatrix = new Matrix(this.row,this.col,0);


        var that = this.multiArray; 
        for(var i = 0; i<this.row; i++)
        {
            for(var j = 0;j<this.col;j++)
            {
                resultMatrix.multiArray[i][j]= that[i][j]/number;
            }
        }
        return resultMatrix;



    };

    Matrix.prototype.trasp = function(){

        resultMatrix = new Matrix(this.col,this.row,0);
        var that = this.multiArray; 

        for(var i = 0; i<this.row; i++)
        {
            for(var j = 0;j<this.col;j++)
            {
                resultMatrix.multiArray[j][i]= that[i][j];
            }
        }
        return resultMatrix;
    };

    Matrix.prototype.log = function() {

        resultMatrix = new Matrix(this.row,this.col,0);
        var that = this.multiArray; 


        for(var i = 0; i<this.row; i++)
        {
            for(var j = 0;j<this.col;j++)
            {
                resultMatrix.multiArray[i][j]= Math.log(that[i][j]);
            }
        }
        return resultMatrix;
    };

    Matrix.prototype.esp = function() {

        resultMatrix = new Matrix(this.row,this.col,0);
        var that = this.multiArray; 


        for(var i = 0; i<this.row; i++)
        {
            for(var j = 0;j<this.col;j++)
            {
                resultMatrix.multiArray[i][j]= Math.exp(that[i][j]);
            }
        }
        return resultMatrix;
    };

}

module.exports.Matrix = Matrix;
