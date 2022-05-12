const click = (e,id) => {
 
    Array.from(id).forEach((element) => {
      if (element !== e.currentTarget) {
        element.style.backgroundColor = "#ffffff";
        element.classList.remove("active");
      } else {
        e.currentTarget.style.backgroundColor = "#E5F2F5";
        e.currentTarget.classList.add("active");
      }
    })


}

export default click