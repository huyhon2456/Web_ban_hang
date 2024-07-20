document.addEventListener('DOMContentLoaded', function() {
    const minRange = document.getElementById('min-range');
    const maxRange = document.getElementById('max-range');
    const rangeValues = document.getElementById('range-values');

    function updateRange() {
        const minValue = parseInt(minRange.value);
        const maxValue = parseInt(maxRange.value);

        if (minValue > maxValue - 1000) {
            if (this === minRange) {
                minRange.value = maxValue - 1000;
            } else {
                maxRange.value = minValue + 1000;
            }
        }

        rangeValues.textContent = `${minRange.value} ₫ - ${maxRange.value} ₫`;
    }

    minRange.addEventListener('input', updateRange);
    maxRange.addEventListener('input', updateRange);
});
function addToCart() {
    // Thêm mã xử lý giỏ hàng tại đây
    window.location.href = 'giohang.html';
}
