      const itemsPerPage = 4; 
      let currentPage = 1; 
      let filteredItems = []; 
  
      function showPage(page) {
          const items = filteredItems.length ? filteredItems : document.querySelectorAll('.item');
          const totalItems = items.length;
          const totalPages = Math.ceil(totalItems / itemsPerPage);
  
          
          document.querySelectorAll('.item').forEach(item => item.style.display = 'none');
  
          
          const start = (page - 1) * itemsPerPage;
          const end = start + itemsPerPage;
  
          
          for (let i = start; i < end && i < totalItems; i++) {
              items[i].style.display = 'block';
          }
  
          
          const pagination = document.querySelector('.pagination');
          pagination.innerHTML = ''; 
  
          
          if (page > 1) {
              const prevLi = document.createElement('li');
              prevLi.className = 'page-item';
              prevLi.innerHTML = `<a class="page-link btn btn-success" href="#" onclick="goToPage(${page - 1})">&laquo; Anterior</a>`;
              pagination.appendChild(prevLi);
          }
  
          
          for (let i = 1; i <= totalPages; i++) {
              const li = document.createElement('li');
              li.className = `page-item ${i === page ? 'active' : ''}`;
              li.innerHTML = `<a class="page-link btn btn-success" href="#" onclick="goToPage(${i})">${i}</a>`;
              pagination.appendChild(li);
          }
  
          
          if (page < totalPages) {
              const nextLi = document.createElement('li');
              nextLi.className = 'page-item';
              nextLi.innerHTML = `<a class="page-link btn btn-success" href="#" onclick="goToPage(${page + 1})">Próximo &raquo;</a>`;
              pagination.appendChild(nextLi);
          }
      }
  
      function goToPage(page) {
          currentPage = page;
          showPage(currentPage);
      }
  
      function filterItems(category) {
          const allItems = document.querySelectorAll('.item');
  
          
          if (category === 'all') {
              filteredItems = Array.from(allItems); 
          } else {
              filteredItems = Array.from(allItems).filter(item => item.classList.contains(category)); 
          }
  
          currentPage = 1; 
          showPage(currentPage); 
      }
  
      
      showPage(currentPage);


      const tabs = document.querySelectorAll('.sidebar1 li');
      const contentItems = document.querySelectorAll('.content-item');
  
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          contentItems.forEach(item => item.classList.remove('active'));
  
          tab.classList.add('active');
          const contentId = tab.getAttribute('data-content');
          document.getElementById(contentId).classList.add('active');
        });
      });