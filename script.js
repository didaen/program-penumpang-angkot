const penumpang = ["Dida", "Isna", "Fina"];
console.log(penumpang);
penumpang[1] = undefined;
console.log(penumpang);
const tambahPenumpang = (namaPenumpang, penumpang) => {
    // jika angkot kosong
    if (penumpang.length === 0) {
        //     tambah penumpang di awal array
        penumpang[0] = namaPenumpang;

        //     kembalikan isi array & keluar dari function
        return penumpang;
    }

    // else
    else {
        



        // telusuri seluruh kursi dari awal
        let i = 0;
        // for(i; i < penumpang.length; i++) {
        //    // Cek apakah orang yang mau naik namanya sama
        //    if(penumpang[i] === namaPenumpang) {
        //         return '$()'
        //    }
           
            // jika ada kursi kosong
            if(penumpang[i] === undefined) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                break;
            }
            
        }

        // Jika tidak terdapat kursi kosong
        if(penumpang[i] !== namaPenumpang) {
            // Penumpang di tempatkan di kursi paling akhir
            penumpang[penumpang.length] = namaPenumpang; 
        }

        // kembalikan isi array & keluar dari function
        return penumpang;

        

        
        

    }

    
    //         jika sudah ada nama yang sama
    //             tampilkan pesan kesalahannya
    //             kembalikan isi array & keluar dari function
    //         jika seluruh kursi terisi
    //             tambah penumpang di akhir Array
    //             kembalikan isi array & keluar dari function
    
}

console.log(penumpang);