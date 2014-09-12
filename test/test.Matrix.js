var Matrix = require('/home/valentina/workspace/esercizi/Matrix.js').Matrix;
var assert = require('assert');
var should = require('should');
describe("Matrix", function() {
    describe(".sumMatrix", function() {
        it("somma", function(){

            var matr = new Matrix(3,5,1);
            var matr2 = new Matrix(3,5,4);
            var result = matr.sumMatrix(matr2);
            var prova = new Matrix(3,5,5);
            assert.deepEqual(prova,result);
        });
    });
    describe(".diffMatrix", function() {
        it("differenza", function(){

            var matr = new Matrix(3,5,10);
            var matr2 = new Matrix(3,5,7);
            var result = matr.diffMatrix(matr2);
            var prova = new Matrix(3,5,3);

            assert.deepEqual(prova,result);
        });
    });
    describe(".moltMatrix", function() {
        it("moltiplicazione", function(){

            var matr = new Matrix(3,5,2);
            var matr2 = new Matrix(5,1,2);
            var result = matr.moltMatrix(matr2);
            var prova = new Matrix(3,1,20);

            assert.deepEqual(prova,result);
        });
    });
    describe(".moltMatrixScal", function() {
        it("moltiplicazionescalare", function(){

            var matr = new Matrix(3,5,1);

            var result = matr.moltMatrixScal(2);
            var prova = new Matrix(3,5,2);

            assert.deepEqual(prova,result);
        });
    });
    describe(".divMatrix", function() {
        it("divisione", function(){

            var matr = new Matrix(3,5,2);
            var result = matr.divMatrix(2);
            var prova = new Matrix(3,5,1);
            assert.deepEqual(prova,result);
        });
    });
    describe(".trasp", function() {
        it("trasposta", function(){

            var matr = new Matrix(3,5,2);
            var result = matr.trasp();
            var prova = new Matrix(5,3,2);
            assert.deepEqual(prova,result);
        });
    });
    describe(".log", function() {
        it("logaritmo", function(){

            var matr = new Matrix(3,5,2);
            var result = matr.log();
            var prova = new Matrix(3,5,Math.log(2));
            assert.deepEqual(prova,result);
        });
    });
    describe(".esp", function() {
        it("esponenziale", function(){

            var matr = new Matrix(3,5,2);
            var result = matr.esp();
            var prova = new Matrix(3,5,Math.exp(2));
            assert.deepEqual(prova,result);
        });
    });
});
