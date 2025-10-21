document.addEventListener('DOMContentLoaded', function(){
  var options = {
    valueNames: ['name','family','exposure','zone','height'],
    listClass: 'list'
  };
  var plantList = new List('plants', options);

  var exposureSelect = document.getElementById('exposure-filter');
  var zoneSelect = document.getElementById('zone-filter');
  var sortSelect = document.getElementById('sort-by');

  function applyFilters(){
    var exp = exposureSelect.value;
    var zone = zoneSelect.value ? parseInt(zoneSelect.value,10) : null;

    plantList.filter(function(item){
      var itemExp = item.values().exposure || '';
      var itemZone = parseInt(item.values().zone || '0',10);
      if(exp && itemExp !== exp) return false;
      if(zone && itemZone < zone) return false;
      return true;
    });
  }

  exposureSelect.addEventListener('change', applyFilters);
  zoneSelect.addEventListener('change', applyFilters);
  sortSelect.addEventListener('change', function(){
    plantList.sort(sortSelect.value, { order: "asc" });
  });

  applyFilters();
});
