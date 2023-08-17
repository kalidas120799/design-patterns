/* The Module Pattern is a design pattern in JavaScript that
 provides a way to encapsulate and organize code by creating self-contained modules */

const calculateWeight = (function () {
    const POUND = 0.220462;
    const TONS = 0.000110231
    const METRIC_TONS = 0.0001
    let userWeight = 0

    function convert(weight, type) {
        userWeight = weight;
        switch (type) {
            case 1:
                return weight * POUND
            case 2:
                return weight * TONS
            case 3:
                return weight * METRIC_TONS
            default:
                return weight;

        }
    }

    return {
        weight: userWeight,
        converWeight: function (weight, type) {
            return convert(weight, type)
        }
    }

})();

console.log(calculateWeight.weight)
console.log(calculateWeight.userWeight)
console.log(calculateWeight.converWeight(10, 1))