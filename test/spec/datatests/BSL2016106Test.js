/* global after, before, chai, describe, it */
'use strict';


var expect = chai.expect;


var Collection = require('mvc/Collection'),
    Formatter = require('geomag/Formatter'),
    Measurement = require('geomag/Measurement'),
    Observation = require('geomag/Observation'),
    ObservationBaselineCalculator =
        require('geomag/ObservationBaselineCalculator'),
    ObservatoryFactory = require('geomag/ObservatoryFactory'),
    Reading = require('geomag/Reading');


describe('BSL 2016-106 (aka 2016-04-15)', function () {
  var calculator,
      factory,
      observation,
      set1,
      set2,
      set3,
      set4;

  before(function () {
    calculator = ObservationBaselineCalculator({
      pierCorrection: -4.2,
      trueAzimuthOfMark: 176.6458
    });

    factory = ObservatoryFactory();

    set1 = Reading({
      set_number: 1,
      measurements: Collection([
      // declination
        Measurement({
          type: Measurement.FIRST_MARK_UP,
          angle: Formatter.dmsToDecimal(18, 48, 0)
        }),
        Measurement({
          type: Measurement.FIRST_MARK_DOWN,
          angle: Formatter.dmsToDecimal(198, 48, 36)
        }),
        Measurement({
          type: Measurement.WEST_DOWN,
          time: new Date('2016-04-15T14:28:21Z'),
          angle: Formatter.dmsToDecimal(291, 13, 36),
          e: -61.850
        }),
        Measurement({
          type: Measurement.EAST_DOWN,
          time: new Date('2016-04-15T14:29:47Z'),
          angle: Formatter.dmsToDecimal(111, 24, 0),
          e: -62.140
        }),
        Measurement({
          type: Measurement.WEST_UP,
          time: new Date('2016-04-15T14:30:41Z'),
          angle: Formatter.dmsToDecimal(111, 23, 24),
          e: -62.380
        }),
        Measurement({
          type: Measurement.EAST_UP,
          time: new Date('2016-04-15T14:31:51Z'),
          angle: Formatter.dmsToDecimal(291, 14, 12),
          e: -63.210
        }),
        Measurement({
          type: Measurement.SECOND_MARK_UP,
          angle: Formatter.dmsToDecimal(18, 48, 0)
        }),
        Measurement({
          type: Measurement.SECOND_MARK_DOWN,
          angle: Formatter.dmsToDecimal(198, 48, 36)
        }),
      // inclination
        Measurement({
          type: Measurement.SOUTH_DOWN,
          time: new Date('2016-04-15T14:34:32Z'),
          angle: Formatter.dmsToDecimal(239, 50, 54),
          h: 23290.900,
          z: 41028.430,
          f: 47580.940
        }),
        Measurement({
          type: Measurement.NORTH_UP,
          time: new Date('2016-04-15T14:36:01Z'),
          angle: Formatter.dmsToDecimal(59, 50, 36),
          h: 23290.970,
          z: 41027.920,
          f: 47580.540
        }),
        Measurement({
          type: Measurement.SOUTH_UP,
          time: new Date('2016-04-15T14:37:22Z'),
          angle: Formatter.dmsToDecimal(120, 14, 24),
          h: 23290.720,
          z: 41027.500,
          f: 47580.070
        }),
        Measurement({
          type: Measurement.NORTH_DOWN,
          time: new Date('2016-04-15T14:39:38Z'),
          angle: Formatter.dmsToDecimal(300, 14, 48),
          h: 23289.900,
          z: 41026.810,
          f: 47579.070
        })
      ])
    });

    set2 = Reading({
      set_number: 2,
      measurements: Collection([
      // declination
        Measurement({
          type: Measurement.FIRST_MARK_UP,
          angle: Formatter.dmsToDecimal(18, 48, 0)
        }),
        Measurement({
          type: Measurement.FIRST_MARK_DOWN,
          angle: Formatter.dmsToDecimal(198, 48, 36)
        }),
        Measurement({
          type: Measurement.WEST_DOWN,
          time: new Date('2016-04-15T14:40:56Z'),
          angle: Formatter.dmsToDecimal(291, 13, 36),
          e: -64.460
        }),
        Measurement({
          type: Measurement.EAST_DOWN,
          time: new Date('2016-04-15T14:41:48Z'),
          angle: Formatter.dmsToDecimal(111, 23, 6),
          e: -65.340
        }),
        Measurement({
          type: Measurement.WEST_UP,
          time: new Date('2016-04-15T14:43:07Z'),
          angle: Formatter.dmsToDecimal(111, 22, 54),
          e: -66.470
        }),
        Measurement({
          type: Measurement.EAST_UP,
          time: new Date('2016-04-15T14:44:20Z'),
          angle: Formatter.dmsToDecimal(291, 13, 48),
          e: -67.190
        }),
        Measurement({
          type: Measurement.SECOND_MARK_UP,
          angle: Formatter.dmsToDecimal(18, 48, 0)
        }),
        Measurement({
          type: Measurement.SECOND_MARK_DOWN,
          angle: Formatter.dmsToDecimal(198, 48, 36)
        }),
      // inclination
        Measurement({
          type: Measurement.SOUTH_DOWN,
          time: new Date('2016-04-15T14:45:57Z'),
          angle: Formatter.dmsToDecimal(239, 50, 54),
          h: 23291.300,
          z: 41024.540,
          f: 47577.720
        }),
        Measurement({
          type: Measurement.NORTH_UP,
          time: new Date('2016-04-15T14:47:02Z'),
          angle: Formatter.dmsToDecimal(59, 50, 18),
          h: 23291.870,
          z: 41024.190,
          f: 47577.760
        }),
        Measurement({
          type: Measurement.SOUTH_UP,
          time: new Date('2016-04-15T14:48:34Z'),
          angle: Formatter.dmsToDecimal(120, 14, 48),
          h: 23292.310,
          z: 41023.840,
          f: 47577.650
        }),
        Measurement({
          type: Measurement.NORTH_DOWN,
          time: new Date('2016-04-15T14:49:34Z'),
          angle: Formatter.dmsToDecimal(300, 15, 0),
          h: 23292.480,
          z: 41023.520,
          f: 47577.500
        })
      ])
    });

    set3 = Reading({
      set_number: 3,
      measurements: Collection([
      // declination
        Measurement({
          type: Measurement.FIRST_MARK_UP,
          angle: Formatter.dmsToDecimal(18, 48, 0)
        }),
        Measurement({
          type: Measurement.FIRST_MARK_DOWN,
          angle: Formatter.dmsToDecimal(198, 48, 36)
        }),
        Measurement({
          type: Measurement.WEST_DOWN,
          time: new Date('2016-04-15T14:51:25Z'),
          angle: Formatter.dmsToDecimal(291, 12,42),
          e: -70.260
        }),
        Measurement({
          type: Measurement.EAST_DOWN,
          time: new Date('2016-04-15T14:52:39Z'),
          angle: Formatter.dmsToDecimal(111, 22, 24),
          e: -71.170
        }),
        Measurement({
          type: Measurement.WEST_UP,
          time: new Date('2016-04-15T14:53:33Z'),
          angle: Formatter.dmsToDecimal(111, 22, 12),
          e: -71.180
        }),
        Measurement({
          type: Measurement.EAST_UP,
          time: new Date('2016-04-15T14:54:43Z'),
          angle: Formatter.dmsToDecimal(291, 13, 0),
          e: -71.700
        }),
        Measurement({
          type: Measurement.SECOND_MARK_UP,
          angle: Formatter.dmsToDecimal(18, 48, 0)
        }),
        Measurement({
          type: Measurement.SECOND_MARK_DOWN,
          angle: Formatter.dmsToDecimal(198, 48, 36)
        }),
      // inclination
        Measurement({
          type: Measurement.SOUTH_DOWN,
          time: new Date('2016-04-15T14:56:29Z'),
          angle: Formatter.dmsToDecimal(239, 50, 18),
          h: 23295.770,
          z: 41022.000,
          f: 47577.740
        }),
        Measurement({
          type: Measurement.NORTH_UP,
          time: new Date('2016-04-15T14:58:08Z'),
          angle: Formatter.dmsToDecimal(59, 50, 6),
          h: 23296.070,
          z: 41021.820,
          f: 47577.780
        }),
        Measurement({
          type: Measurement.SOUTH_UP,
          time: new Date('2016-04-15T14:59:29Z'),
          angle: Formatter.dmsToDecimal(120, 15, 6),
          h: 23296.790,
          z: 41021.710,
          f: 47578.080
        }),
        Measurement({
          type: Measurement.NORTH_DOWN,
          time: new Date('2016-04-15T15:00:30Z'),
          angle: Formatter.dmsToDecimal(300, 15, 12),
          h: 23296.490,
          z: 41021.710,
          f: 47577.880
        })
      ])
    });

    set4 = Reading({
      set_number: 4,
      measurements: Collection([
      // declination
        Measurement({
          type: Measurement.FIRST_MARK_UP,
          angle: Formatter.dmsToDecimal(18, 48, 0)
        }),
        Measurement({
          type: Measurement.FIRST_MARK_DOWN,
          angle: Formatter.dmsToDecimal(198, 48, 36)
        }),
        Measurement({
          type: Measurement.WEST_DOWN,
          time: new Date('2016-04-15T15:01:59Z'),
          angle: Formatter.dmsToDecimal(291, 12, 54),
          e: -70.320
        }),
        Measurement({
          type: Measurement.EAST_DOWN,
          time: new Date('2016-04-15T15:02:45Z'),
          angle: Formatter.dmsToDecimal(111, 22, 36),
          e: -69.940
        }),
        Measurement({
          type: Measurement.WEST_UP,
          time: new Date('2016-04-15T15:03:29Z'),
          angle: Formatter.dmsToDecimal(111, 22, 18),
          e: -69.990
        }),
        Measurement({
          type: Measurement.EAST_UP,
          time: new Date('2016-04-15T15:04:29Z'),
          angle: Formatter.dmsToDecimal(291, 13, 6),
          e: -70.050
        }),
        Measurement({
          type: Measurement.SECOND_MARK_UP,
          angle: Formatter.dmsToDecimal(18, 48, 0)
        }),
        Measurement({
          type: Measurement.SECOND_MARK_DOWN,
          angle: Formatter.dmsToDecimal(198, 48, 36)
        }),
      // inclination
        Measurement({
          type: Measurement.SOUTH_DOWN,
          time: new Date('2016-04-15T15:05:52Z'),
          angle: Formatter.dmsToDecimal(239, 50, 12),
          h: 23298.000,
          z: 41021.980,
          f: 47578.850
        }),
        Measurement({
          type: Measurement.NORTH_UP,
          time: new Date('2016-04-15T15:07:07Z'),
          angle: Formatter.dmsToDecimal(59, 50, 0),
          h: 23298.060,
          z: 41021.870,
          f: 47578.760
        }),
        Measurement({
          type: Measurement.SOUTH_UP,
          time: new Date('2016-04-15T15:08:14Z'),
          angle: Formatter.dmsToDecimal(120, 15, 12),
          h: 23297.920,
          z: 41021.660,
          f: 47578.530
        }),
        Measurement({
          type: Measurement.NORTH_DOWN,
          time: new Date('2016-04-15T15:09:11Z'),
          angle: Formatter.dmsToDecimal(300, 15, 30),
          h: 23298.350,
          z: 41021.490,
          f: 47578.590
        })
      ])
    });

    observation = Observation({
      begin: new Date('2016-04-15T14:28:21Z'),
      readings: Collection([
        set1,
        set2,
        set3,
        set4
      ])
    });
  });

  after(function () {
    calculator = null;
    factory = null;
    set1 = null;
    set2 = null;
    set3 = null;
    set4 = null;
    observation = null;
  });

  describe('set1', function () {
    var declinations,
        measurements,
        times;

    before(function () {
      measurements = set1.get('measurements').data();
      declinations = factory.getDeclinations(measurements);
      times = factory.getMeasurementValues(declinations, 'time');
    });

    it('set number is 1', function () {
      expect(set1.get('set_number')).to.equal(1);
    });

    it('starttime is 142821', function () {
      var starttime;

      starttime = Math.min.apply(null, times);
      expect(starttime).to.equal(
            new Date('2016-04-15T14:28:21Z').getTime());
    });

    it('endtime is 143151', function () {
      var endtime;

      endtime = Math.max.apply(null, times);
      expect(endtime).to.equal(
          new Date('2016-04-15T14:31:51Z').getTime());
    });

    it('absolute declination is -50.75', function () {
      var absolute;

      absolute = calculator.magneticDeclination(set1);
      expect((absolute * 60).toFixed(2)).to.equal('-50.75');
    });

    it('ordinate value is -8.96', function () {
      var ordinate;

      ordinate = calculator.dComputed(set1);
      expect((ordinate * 60).toFixed(2)).to.equal('-8.96');
    });

    it('baseline value is -41.79', function () {
      var baseline;

      baseline = calculator.dBaseline(set1);
      expect((baseline * 60).toFixed(2)).to.equal('-41.79');
    });
  });

});
