import {
  PUBLIC_ADMIN_ROLE,
  PUBLIC_SOPIR_ROLE,
  PUBLIC_PUBLIC_ROLE,
} from "$env/static/public";

export const randomRole = (num) => {
  let r = [];
  let a = matchRole(num);
  for (let i = 0; i < 4; i++) {
    let no = Math.floor(Math.random() * (9999 - 1000) + 1000);
    r.push(no.toString());
  }

  let ran = Math.floor(Math.random() * (3 - 1) + 1);
  r.splice(ran, 1, a);
  //   console.log(r.toString());
  return r.toString();
};

const matchRole = (r) => {
  switch (Number(r)) {
    case 1:
      return PUBLIC_ADMIN_ROLE;
      break;
    case 2:
      return PUBLIC_SOPIR_ROLE;
      break;

    default:
      return PUBLIC_PUBLIC_ROLE;
  }
};

export const getRole = (strRole) => {
  if (!strRole) return null;
  let arrRole = strRole.toString().split(",");
  if (arrRole.includes(PUBLIC_ADMIN_ROLE)) {
    return "Admin";
  } else if (arrRole.includes(PUBLIC_SOPIR_ROLE)) {
    return "Sopir";
  } else if (arrRole.includes(PUBLIC_PUBLIC_ROLE)) {
    return "Public";
  } else {
    return null;
  }
};
