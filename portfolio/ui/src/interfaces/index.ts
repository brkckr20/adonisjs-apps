export interface User{
    ad_soyad?: string;
    unvan?: string;
    adres?: string;
    mail?: string;
    resim?: string;
    token: string;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    id?: number,
    isLoggedIn : boolean
}
