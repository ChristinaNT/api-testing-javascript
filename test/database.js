process.env.NODE_ENV = 'test';

//let mongoose = require('mongoose');
let baseUrl = 'http://localhost:3000';
let Vegetables = require('../lib/vegetables.js');

//let mongoose = require("mongoose");
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server').default;

let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

describe('Vegetables', function() {
    /*afterEach(function(done){
        Vegetables.collection.drop();
        done();
      });*/
    describe('when POST /vegetable is requested', function() {
        it('should have the posted vegetable in the vegetables database', function() {
            chai.request(server)
            .post('/vegetable').send('egg plant')
            .end(function(err, res) {
                console.log(res);
                res.should.have.status(200);
                done();
                chai.request(server)
                .get('/vegetable')
                .end(function(err, res) {
                    res.should.have.status(200);
                    expect(res).should.have.status(200);
                    expect(res.body).should.be.a('array');
                    expect(res.body).should.be.eql(1);
                    done();
                });

        });
    });
});

    describe('when GET /vegetable is requested', function() {
                it('should respond with all the vegetables in the vegetables database', function() {
            chai.request(server)
            .get('/vegetable')
            .end(function(err, res) {
                console.log(res.status);
                expect(res).to.have.status(200);
                expect(res.body).should.be.a('array');
                expect(res.body).should.be.eql(0);
                done();
            });

        });

        /*it('should respond with all vegetables upperCased if the query parameter \'upperCase\' is \'true\'', function() {

        });*/
    });

    /*describe('when DELETE /vegetable/:name is requested', function() {
        it('should respond with 200 and \'Successfully deleted: \' and the vegetable name', function() {

        });
    });*/
});