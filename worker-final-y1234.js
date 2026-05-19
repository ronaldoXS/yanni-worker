const FIREBASE_PROJECT = "yanni-sushi";
const FIREBASE_API_KEY = "AIzaSyD-Qm_-JIMb5NSdow7RDAcd6PGZLDX0org";

const HTML_SITE = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Yanni Sushi & Restaurante</title>
<style>
:root{--pr:#e63946;--bg:#0d0d0d;--sf:#1a1a1a;--sf2:#222;--tx:#eee;--mt:#888;--bd:#2a2a2a;--gn:#4caf50;--gd:#f4c430;}
*{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',Arial,sans-serif;}
body{background:var(--bg);color:var(--tx);line-height:1.5;}
header{background:var(--sf);padding:10px 4%;border-bottom:2px solid var(--pr);display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;z-index:999;}
.logo{display:flex;align-items:center;gap:10px;}
.logo img{height:50px;width:auto;object-fit:contain;}
.logo-txt{display:flex;flex-direction:column;line-height:1.1;}
.logo-txt .ln1{color:var(--pr);font-weight:900;font-size:1.4rem;letter-spacing:2px;font-style:italic;text-shadow:1px 1px 0 #000,-1px -1px 0 #000;}
.logo-txt .ln2{color:#aaa;font-size:.58rem;letter-spacing:.5px;}
.logo-icon{width:52px;height:52px;position:relative;flex-shrink:0;}
.logo-icon svg{width:100%;height:100%;}
.hbtns{display:flex;gap:8px;align-items:center;}
.hbtn{background:var(--pr);color:#fff;border:none;padding:7px 13px;border-radius:20px;cursor:pointer;font-size:.8rem;font-weight:700;display:none;}
.admin-ico{opacity:.3;cursor:pointer;background:none;border:none;font-size:1.2rem;color:#fff;padding:4px;}
.sync-dot{width:8px;height:8px;border-radius:50%;background:var(--gn);display:inline-block;margin-right:4px;}
.sync-dot.off{background:#ff4444;}
.cat-bar{background:#111;border-bottom:1px solid #1e1e1e;overflow-x:auto;white-space:nowrap;scrollbar-width:none;}
.cat-bar::-webkit-scrollbar{display:none;}
.cat-bar-inner{display:inline-flex;gap:4px;padding:10px 14px;}
.ct{display:inline-block;padding:7px 15px;border-radius:7px 7px 0 0;font-size:.8rem;font-weight:600;cursor:pointer;color:var(--mt);background:transparent;border:none;border-bottom:2px solid transparent;transition:.15s;white-space:nowrap;}
.ct:hover{color:var(--tx);}
.ct.on{color:var(--pr);border-bottom-color:var(--pr);}
.wrap{max-width:1100px;margin:0 auto;padding:18px 16px 140px;}
.sec-title{color:var(--pr);margin:28px 0 14px;border-left:4px solid var(--pr);padding-left:10px;text-transform:uppercase;font-size:1rem;}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px;}
.pcard{background:var(--sf);border-radius:11px;overflow:hidden;border:1px solid #1e1e1e;position:relative;transition:.18s;}
.pcard:hover{border-color:#333;transform:translateY(-2px);}
.pcard.sem-estoque{opacity:.5;}
.pcard.sem-estoque .btn-add{background:#555;cursor:not-allowed;}
.estoque-badge{position:absolute;top:7px;right:7px;background:rgba(0,0,0,.85);color:var(--gd);font-size:.65rem;font-weight:700;padding:2px 7px;border-radius:10px;}
.estoque-badge.baixo{color:#ff6b35;}
.estoque-badge.zerado{color:#ff4444;}
.pimg{width:100%;height:148px;object-fit:cover;background:#1a1a1a;display:block;}
.pinfo{padding:11px 13px 13px;}
.pname{font-weight:700;font-size:.93rem;margin-bottom:2px;}
.pdesc{font-size:.75rem;color:var(--mt);margin-bottom:9px;min-height:16px;}
.pfoot{display:flex;justify-content:space-between;align-items:center;}
.ppreco{font-weight:700;color:var(--pr);font-size:1.05rem;}
.btn-add{background:var(--pr);color:#fff;border:none;padding:7px 12px;border-radius:7px;cursor:pointer;font-weight:700;font-size:.8rem;}
.btn-add:hover{background:#c01828;}
.btn-del{position:absolute;top:7px;right:7px;background:rgba(0,0,0,.8);color:#ff4444;border:none;border-radius:50%;width:27px;height:27px;cursor:pointer;font-size:.8rem;display:none;align-items:center;justify-content:center;}
.btn-edt{position:absolute;top:7px;left:7px;background:rgba(0,0,0,.8);color:var(--gd);border:none;border-radius:50%;width:27px;height:27px;cursor:pointer;font-size:.78rem;display:none;align-items:center;justify-content:center;}
.admin-mode .btn-del,.admin-mode .btn-edt{display:flex;}
.cbar{position:fixed;bottom:18px;left:50%;transform:translateX(-50%);width:92%;max-width:480px;background:var(--pr);color:#fff;padding:13px 22px;border-radius:50px;display:none;justify-content:space-between;align-items:center;font-weight:700;cursor:pointer;z-index:900;box-shadow:0 4px 22px rgba(230,57,70,.55);}
.ov{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:2000;overflow-y:auto;padding:14px;}
.box{max-width:570px;margin:0 auto;background:#141414;padding:22px;border-radius:12px;border:1px solid var(--pr);}
.box h2{color:var(--pr);margin-bottom:16px;font-size:1.15rem;}
.tabs{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:16px;}
.tb{flex:1;min-width:50px;padding:8px 4px;background:#222;color:#aaa;border:none;border-radius:6px;cursor:pointer;font-weight:700;font-size:.65rem;transition:.12s;}
.tb.on{background:var(--pr);color:#fff;}
.tc{display:none;}
.tc.on{display:block;}
.fg{margin-bottom:12px;}
.fg label{display:block;font-size:.78rem;color:#aaa;margin-bottom:4px;}
.fg input,.fg select,.fg textarea{width:100%;padding:9px 10px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;font-size:.9rem;}
.fg input:focus,.fg select:focus,.fg textarea:focus{outline:none;border-color:var(--pr);}
.fg textarea{resize:vertical;min-height:65px;}
.bpr{width:100%;padding:11px;background:var(--pr);color:#fff;border:none;border-radius:7px;font-weight:700;font-size:.95rem;cursor:pointer;margin-top:4px;}
.bpr:hover{background:#c01828;}
.bsc{width:100%;padding:9px;background:#2a2a2a;color:#fff;border:none;border-radius:7px;cursor:pointer;margin-top:7px;font-size:.88rem;}
.bgn{width:100%;padding:11px;background:var(--gn);color:#fff;border:none;border-radius:7px;font-weight:700;font-size:.95rem;cursor:pointer;margin-top:4px;}
.bwn{width:100%;padding:10px;background:orange;color:#000;border:none;border-radius:7px;font-weight:700;cursor:pointer;}
.mok{color:var(--gn);font-size:.8rem;margin-top:6px;text-align:center;display:none;}
#imgPrev{width:100%;height:115px;object-fit:cover;border-radius:6px;margin-top:6px;display:none;}
.apl{max-height:330px;overflow-y:auto;}
.api{display:flex;align-items:center;gap:9px;padding:8px;background:#1e1e1e;border-radius:7px;margin-bottom:6px;}
.api img{width:44px;height:44px;object-fit:cover;border-radius:5px;flex-shrink:0;}
.api .ai{flex:1;min-width:0;}
.api .ai strong{display:block;font-size:.86rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.api .ai span{font-size:.72rem;color:#888;}
.api .aib{display:flex;gap:4px;}
.brm{background:none;border:1px solid #ff4444;color:#ff4444;border-radius:4px;padding:3px 7px;cursor:pointer;font-size:.7rem;}
.bed{background:none;border:1px solid var(--gd);color:var(--gd);border-radius:4px;padding:3px 7px;cursor:pointer;font-size:.7rem;}
.cchips{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;}
.cchip{background:#222;border:1px solid #333;border-radius:20px;padding:4px 11px;font-size:.76rem;display:inline-flex;align-items:center;gap:5px;}
.cchip .cx{cursor:pointer;color:#ff4444;font-size:.82rem;}
.cir{display:flex;align-items:center;gap:9px;padding:8px 0;border-bottom:1px solid #222;}
.cin{flex:1;font-size:.88rem;}
.cip{color:var(--pr);font-weight:700;font-size:.85rem;white-space:nowrap;}
.qc{display:flex;align-items:center;gap:5px;}
.qc button{background:#2a2a2a;border:none;color:#fff;width:25px;height:25px;border-radius:50%;cursor:pointer;font-size:.95rem;display:flex;align-items:center;justify-content:center;}
.qc span{min-width:18px;text-align:center;font-size:.88rem;}
.ctrow{display:flex;justify-content:space-between;padding:11px 0 4px;font-weight:700;font-size:1.05rem;}
.popt{display:flex;align-items:center;gap:11px;padding:11px;background:#1e1e1e;border-radius:8px;margin-bottom:7px;cursor:pointer;border:2px solid transparent;transition:.14s;}
.popt:hover,.popt.on{border-color:var(--pr);}
.pico{font-size:1.4rem;width:34px;text-align:center;}
.pinf strong{display:block;font-size:.88rem;}
.pinf span{font-size:.73rem;color:#888;}
.pdet{background:#111;border-radius:8px;padding:14px;margin-top:8px;display:none;}
.pdet a.mpbtn{display:block;text-align:center;background:var(--pr);color:#fff;padding:11px;border-radius:8px;font-weight:700;text-decoration:none;font-size:.9rem;margin-bottom:10px;}
.parc-sel{width:100%;padding:8px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;font-size:.85rem;margin-top:6px;}
.parc-info{font-size:.78rem;color:var(--gd);margin-top:5px;text-align:center;}
.pix-chave{color:var(--gd);font-weight:700;font-size:.95rem;margin-top:6px;word-break:break-all;}
.obs-box{background:#0d1a0d;border:1px solid #1e3a1e;border-radius:8px;padding:11px;margin:12px 0;}
.obs-box label{font-size:.78rem;color:#6db46d;display:block;margin-bottom:5px;}
.obs-box textarea{width:100%;background:#111;border:1px solid #2a2a2a;color:#fff;border-radius:6px;padding:8px;font-size:.83rem;resize:vertical;min-height:58px;}
.cmd-card{background:#1a1a1a;border:1px solid #2a2a2a;border-radius:10px;padding:12px;margin-bottom:10px;}
.cmd-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;}
.cmd-nm{font-weight:700;font-size:.93rem;}
.cmd-tot{color:var(--pr);font-weight:700;font-size:.93rem;}
.cmd-itlist{font-size:.78rem;color:#888;line-height:1.75;}
.cmd-btns{display:flex;gap:6px;margin-top:9px;flex-wrap:wrap;}
.bfc{background:var(--gn);color:#fff;border:none;padding:7px 13px;border-radius:6px;cursor:pointer;font-weight:700;font-size:.78rem;}
.bai{background:#2a2a2a;color:#fff;border:none;padding:7px 11px;border-radius:6px;cursor:pointer;font-size:.78rem;}
.bdc{background:none;border:1px solid #ff4444;color:#ff4444;padding:5px 9px;border-radius:6px;cursor:pointer;font-size:.75rem;}
.badg{font-size:.68rem;padding:2px 7px;border-radius:10px;font-weight:700;margin-left:6px;}
.badg-ab{background:#1a3a1a;color:#6db46d;}
.badg-fc{background:#2a1a1a;color:#ff6666;}
/* PEDIDOS */
.ped-card{background:#1a1a1a;border:1px solid #2a2a2a;border-radius:10px;padding:12px;margin-bottom:10px;}
.ped-head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;gap:8px;}
.ped-info{flex:1;}
.ped-nome{font-weight:700;font-size:.92rem;}
.ped-fone{font-size:.75rem;color:#888;margin-top:1px;}
.ped-hora{font-size:.7rem;color:#555;}
.ped-tot{color:var(--pr);font-weight:700;font-size:.92rem;white-space:nowrap;}
.ped-itens{font-size:.78rem;color:#888;margin-bottom:9px;line-height:1.7;}
.ped-status{display:inline-block;padding:3px 10px;border-radius:20px;font-size:.7rem;font-weight:700;margin-bottom:8px;}
.st-novo{background:#1a2a3a;color:#5599ff;}
.st-confirmado{background:#1a2a1a;color:#6db46d;}
.st-preparo{background:#2a1a00;color:#f4a430;}
.st-entrega{background:#1a1a2a;color:#a78bfa;}
.st-retirada{background:#1a2a1a;color:#6db46d;}
.st-entregue{background:#1a2a1a;color:#4caf50;}
.ped-btns{display:flex;gap:5px;flex-wrap:wrap;}
.bst{border:none;padding:6px 10px;border-radius:6px;cursor:pointer;font-size:.72rem;font-weight:700;}
.bst-conf{background:#1e3a1e;color:#6db46d;}
.bst-prep{background:#2a1e00;color:#f4a430;}
.bst-entr{background:#1e1e3a;color:#a78bfa;}
.bst-ret{background:#1e3a1e;color:#6db46d;}
.bst-ok{background:#1e3a1e;color:#4caf50;}
/* ESTOQUE */
.est-item{display:flex;align-items:center;gap:9px;padding:8px;background:#1e1e1e;border-radius:7px;margin-bottom:6px;}
.est-img{width:38px;height:38px;object-fit:cover;border-radius:5px;flex-shrink:0;}
.est-info{flex:1;min-width:0;}
.est-nome{font-size:.84rem;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.est-cat{font-size:.7rem;color:#888;}
.est-ctrl{display:flex;align-items:center;gap:6px;}
.est-ctrl button{background:#2a2a2a;border:none;color:#fff;width:24px;height:24px;border-radius:50%;cursor:pointer;font-size:.9rem;display:flex;align-items:center;justify-content:center;}
.est-qty{min-width:36px;text-align:center;font-size:.88rem;font-weight:700;}
.est-qty.baixo{color:#ff6b35;}
.est-qty.zerado{color:#ff4444;}
.est-inf{background:none;border:1px solid #333;color:#aaa;border-radius:4px;padding:2px 7px;cursor:pointer;font-size:.7rem;white-space:nowrap;}
/* RELATÓRIO */
.rel-filtros{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:14px;}
.rel-filtros select,.rel-filtros input{padding:7px 10px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;font-size:.82rem;}
.rel-sumcards{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:14px;}
.rel-sumcard{background:#1e1e1e;border-radius:8px;padding:10px 12px;text-align:center;}
.rel-sumcard .rsv{font-size:1rem;font-weight:700;color:var(--pr);}
.rel-sumcard .rsl{font-size:.7rem;color:#888;margin-top:2px;}
.rel-item{background:#1e1e1e;border-radius:7px;padding:9px 12px;margin-bottom:6px;display:flex;justify-content:space-between;align-items:center;gap:8px;}
.rel-item-info{flex:1;}
.rel-item-nome{font-size:.86rem;font-weight:700;}
.rel-item-cat{font-size:.7rem;color:#888;}
.rel-item-nums{text-align:right;}
.rel-item-qty{font-size:.78rem;color:#aaa;}
.rel-item-val{font-size:.88rem;font-weight:700;color:var(--pr);}
.rel-total{background:#1a1a1a;border:1px solid var(--pr);border-radius:8px;padding:13px 16px;margin-top:10px;display:flex;justify-content:space-between;align-items:center;}
.rel-total span{font-size:1rem;font-weight:700;color:var(--pr);}
.rel-empty{text-align:center;color:#555;padding:30px 0;}
.ov select option{background:#1e1e1e;color:#fff;}
.mesa-card{background:#1e1e1e;border-radius:10px;padding:10px;text-align:center;cursor:pointer;border:2px solid transparent;transition:.15s;position:relative;}
.mesa-card:hover{border-color:#444;}
.mesa-card.livre{border-color:#333;}
.mesa-card.ocupada{border-color:#e63946;background:#1a0a0a;}
.mesa-card.conta{border-color:#f4c430;background:#1a1a00;}
.mesa-card.selecionada{border-color:var(--pr);box-shadow:0 0 12px rgba(230,57,70,.4);}
.mesa-num{font-size:1.1rem;font-weight:700;margin-bottom:3px;}
.mesa-status{font-size:.65rem;color:#888;}
.mesa-tot{font-size:.72rem;color:var(--pr);font-weight:700;margin-top:2px;}
.kds-card{background:#1a1a1a;border:1px solid #333;border-radius:10px;padding:12px;margin-bottom:8px;}
.kds-card.pronto{border-color:var(--gn);opacity:.5;}
.kds-head{display:flex;justify-content:space-between;margin-bottom:8px;}
.kds-mesa{font-weight:700;color:var(--pr);}
.kds-time{font-size:.72rem;color:#888;}
.kds-item{font-size:.82rem;padding:3px 0;border-bottom:1px solid #222;}
.garcom-card{display:flex;align-items:center;gap:9px;padding:8px;background:#1e1e1e;border-radius:7px;margin-bottom:6px;}
/* ── COMANDA MELHORADA ── */
.cmd-mesa-banner{background:linear-gradient(135deg,#a01020,var(--pr));border-radius:10px;padding:12px 14px;margin-bottom:12px;display:flex;align-items:center;gap:10px;}
.cmd-mesa-banner .cmb-icon{font-size:1.6rem;}
.cmd-mesa-banner .cmb-info strong{display:block;color:#fff;font-size:1rem;font-weight:800;}
.cmd-mesa-banner .cmb-info span{color:rgba(255,255,255,.75);font-size:.74rem;}
.cmd-item-row{display:flex;align-items:center;gap:6px;padding:9px 0;border-bottom:1px solid #1e1e1e;}
.cmd-item-row .cin{flex:1;font-size:.85rem;line-height:1.3;}
.cmd-item-row .cin .obs-txt{display:block;font-size:.7rem;color:#888;margin-top:1px;}
.cmd-item-row .cip{color:var(--pr);font-weight:700;font-size:.84rem;white-space:nowrap;min-width:58px;text-align:right;}
/* Controle +/- inline */
.iqc{display:flex;align-items:center;gap:3px;background:#111;border-radius:30px;padding:2px 4px;border:1px solid #2a2a2a;}
.iqc button{width:26px;height:26px;border-radius:50%;border:none;cursor:pointer;font-size:1rem;font-weight:800;display:flex;align-items:center;justify-content:center;transition:.12s;line-height:1;}
.iqc .iqc-minus{background:#1e1e1e;color:#ff5555;}
.iqc .iqc-minus:hover{background:#ff5555;color:#fff;}
.iqc .iqc-plus{background:var(--pr);color:#fff;}
.iqc .iqc-plus:hover{background:#c01828;}
.iqc .iqc-num{min-width:24px;text-align:center;font-size:.92rem;font-weight:800;color:#fff;}
/* Cards de produto no cardápio da comanda */
.prod-card-cmd{background:#1a1a1a;border-radius:10px;overflow:hidden;cursor:pointer;border:2px solid transparent;transition:.18s;text-align:center;position:relative;}
.prod-card-cmd:active{transform:scale(.97);}
.prod-card-cmd:hover{border-color:var(--pr);}
.prod-card-cmd img{width:100%;height:78px;object-fit:cover;}
.prod-card-cmd .pnm{font-size:.73rem;font-weight:700;padding:5px 6px 2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.prod-card-cmd .ppr{font-size:.76rem;color:var(--pr);font-weight:700;padding-bottom:4px;}
.prod-card-cmd .padd{background:var(--pr);color:#fff;font-size:.7rem;font-weight:700;padding:5px;width:100%;display:block;border:none;cursor:pointer;}
.cat-chip-cmd{padding:5px 13px;border-radius:20px;background:#222;color:#aaa;border:none;cursor:pointer;font-size:.75rem;white-space:nowrap;transition:.12s;}
.cat-chip-cmd.on{background:var(--pr);color:#fff;}
/* Modal de quantidade (slide de baixo) */
.qty-wrap{display:none;position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:3500;align-items:flex-end;justify-content:center;}
.qty-wrap.open{display:flex;}
.qty-box{background:#161616;border:2px solid var(--pr);border-radius:20px 20px 0 0;padding:22px 20px 32px;width:100%;max-width:460px;animation:subeModal .22s ease;}
@keyframes subeModal{from{transform:translateY(110%);}to{transform:translateY(0);}}
@keyframes pulse{0%,100%{opacity:.3;transform:scale(.8);}50%{opacity:1;transform:scale(1.2);}}
.qty-mesa-tag{background:var(--pr);color:#fff;border-radius:30px;padding:5px 16px;font-size:.8rem;font-weight:700;display:inline-flex;align-items:center;gap:6px;margin-bottom:14px;}
.qty-prod-row{display:flex;align-items:center;gap:12px;background:#1e1e1e;border-radius:11px;padding:11px;margin-bottom:16px;}
.qty-prod-row img{width:64px;height:64px;object-fit:cover;border-radius:8px;flex-shrink:0;}
.qty-prod-row .qpr-info strong{display:block;font-size:.95rem;font-weight:800;}
.qty-prod-row .qpr-info .qpr-preco{color:var(--pr);font-weight:700;font-size:.88rem;}
.qty-big{display:flex;align-items:center;justify-content:center;gap:20px;margin-bottom:14px;}
.qty-big button{width:46px;height:46px;border-radius:50%;border:none;cursor:pointer;font-size:1.6rem;font-weight:800;display:flex;align-items:center;justify-content:center;transition:.12s;}
.qty-big .qb-minus{background:#1e1e1e;color:#ff5555;border:1px solid #ff555540;}
.qty-big .qb-minus:hover{background:#ff5555;color:#fff;}
.qty-big .qb-plus{background:var(--pr);color:#fff;box-shadow:0 3px 14px rgba(230,57,70,.4);}
.qty-big .qb-plus:hover{background:#c01828;}
.qty-big .qb-n{font-size:2.2rem;font-weight:900;min-width:46px;text-align:center;}
.qty-sub{display:flex;justify-content:space-between;align-items:center;background:#1e1e1e;border-radius:9px;padding:10px 14px;margin-bottom:12px;}
.qty-sub span{font-size:.82rem;color:#888;}
.qty-sub strong{color:var(--gn);font-size:1.05rem;}
.qty-obs{width:100%;padding:9px 12px;background:#1e1e1e;border:1px solid #333;border-radius:9px;color:#fff;font-size:.85rem;margin-bottom:14px;resize:none;font-family:inherit;}
.qty-obs:focus{outline:none;border-color:var(--pr);}
.qty-confirmar{width:100%;padding:13px;background:var(--gn);color:#fff;border:none;border-radius:11px;font-weight:800;font-size:1rem;cursor:pointer;margin-bottom:9px;box-shadow:0 3px 14px rgba(76,175,80,.3);}
.qty-cancelar{width:100%;padding:10px;background:#222;color:#888;border:none;border-radius:11px;cursor:pointer;font-size:.88rem;}
/* Tela de fechar conta melhorada */
.fc-resumo-item{display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #1e1e1e;font-size:.85rem;}
.fc-resumo-item .fci-nome{flex:1;color:#ccc;}
.fc-resumo-item .fci-qty{color:#888;font-size:.78rem;margin:0 8px;}
.fc-resumo-item .fci-val{color:var(--pr);font-weight:700;}
/* Toast */
.cmd-toast{position:fixed;bottom:85px;left:50%;transform:translateX(-50%);background:#111;border:1px solid var(--gn);color:#fff;padding:9px 20px;border-radius:30px;font-size:.85rem;font-weight:700;z-index:6000;opacity:0;transition:opacity .28s;pointer-events:none;white-space:nowrap;}
.cmd-toast.show{opacity:1;}
@media print{header,.cbar,.ov,.cat-bar,.cmd-btns,.btn-del,.btn-edt{display:none!important;}body{background:#fff;color:#000;}}

/* ── UPSELL ── */
.upsell-bar{position:fixed;bottom:75px;left:50%;transform:translateX(-50%);width:92%;max-width:480px;background:#1a1a1a;border:1px solid var(--gd);border-radius:14px;padding:10px 14px;z-index:895;display:none;animation:slideUp .3s ease;}
.upsell-bar.show{display:flex;align-items:center;gap:10px;}
@keyframes slideUp{from{opacity:0;transform:translateX(-50%) translateY(20px);}to{opacity:1;transform:translateX(-50%) translateY(0);}}
.upsell-bar img{width:44px;height:44px;object-fit:cover;border-radius:7px;flex-shrink:0;}
.upsell-info{flex:1;min-width:0;}
.upsell-info strong{display:block;font-size:.8rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.upsell-info span{font-size:.72rem;color:var(--gd);}
.upsell-btn{background:var(--gd);color:#000;border:none;padding:6px 12px;border-radius:8px;font-weight:800;font-size:.78rem;cursor:pointer;white-space:nowrap;flex-shrink:0;}
.upsell-close{background:none;border:none;color:#555;cursor:pointer;font-size:1rem;flex-shrink:0;}

/* ── TEMPO ESTIMADO BANNER ── */
.tempo-banner{background:#1a1a0a;border-bottom:1px solid #2a2a00;padding:6px 16px;text-align:center;font-size:.78rem;color:var(--gd);display:flex;align-items:center;justify-content:center;gap:6px;}

/* ── TRANSFERIR MESA ── */
.transfer-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(70px,1fr));gap:6px;max-height:200px;overflow-y:auto;margin:10px 0;}
.transfer-card{background:#1e1e1e;border:2px solid #2a2a2a;border-radius:8px;padding:8px;text-align:center;cursor:pointer;transition:.14s;font-size:.82rem;font-weight:700;}
.transfer-card:hover{border-color:var(--pr);}
.transfer-card.dest{border-color:var(--gn);background:#0d1a0d;}

/* ── DIVISÃO POR PESSOA ── */
.div-pessoa{background:#1a1a1a;border:1px solid #2a2a2a;border-radius:10px;padding:10px;margin-bottom:8px;}
.div-pessoa-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;}
.div-pessoa-nome{font-weight:700;font-size:.88rem;}
.div-pessoa-tot{color:var(--pr);font-weight:700;}
.div-item-row{display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid #222;font-size:.82rem;}
.div-item-row input[type=checkbox]{width:16px;height:16px;accent-color:var(--pr);cursor:pointer;flex-shrink:0;}
.div-item-nome{flex:1;color:#ccc;}
.div-item-val{color:#888;font-size:.75rem;white-space:nowrap;}
.div-add-pessoa{display:flex;gap:7px;margin-top:10px;}
.div-add-pessoa input{flex:1;padding:8px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;font-size:.85rem;}
/* ── DIVISÃO MELHORADA ── */
.div-aba-wrap{position:relative;display:inline-flex;align-items:center;}
.div-aba-rm{position:absolute;top:-5px;right:-5px;width:16px;height:16px;background:#ff4444;border:none;border-radius:50%;color:#fff;font-size:.6rem;cursor:pointer;display:none;align-items:center;justify-content:center;z-index:1;padding:0;line-height:1;}
.div-aba-wrap:hover .div-aba-rm{display:flex;}
.div-item-atrib{display:flex;justify-content:space-between;align-items:center;padding:8px 11px;background:#0d1a0d;border-radius:7px;margin-bottom:5px;border:1px solid #1e3a1e;}
.div-item-atrib .din{flex:1;font-size:.82rem;}
.div-item-atrib .ddono{color:#4caf50;font-size:.72rem;font-weight:700;margin-left:4px;}
.div-item-atrib .dval{color:#4caf50;font-weight:700;font-size:.82rem;margin:0 8px;}
.div-btn-rm{background:none;border:1px solid #ff6666;color:#ff6666;border-radius:5px;padding:3px 8px;cursor:pointer;font-size:.7rem;white-space:nowrap;flex-shrink:0;}
.div-btn-rm:hover{background:#ff4444;color:#fff;}
.div-progress{height:6px;background:#1e1e1e;border-radius:3px;margin-bottom:12px;overflow:hidden;}
.div-progress-bar{height:100%;background:var(--gn);border-radius:3px;transition:.3s;}
.div-igual-btn{width:100%;padding:9px;background:#1a2a3a;color:#5599ff;border:1px solid #2a4a6a;border-radius:7px;cursor:pointer;font-size:.82rem;font-weight:700;margin-bottom:10px;}
.div-igual-btn:hover{background:#223a5a;}

/* ── PEDIR DE NOVO ── */
.pedir-novo-bar{background:#111;border:1px solid #2a2a2a;border-radius:10px;padding:10px 14px;margin:10px 0;}
.pedir-novo-bar .pnb-title{font-size:.75rem;color:#888;margin-bottom:7px;}
.pedir-novo-item{display:flex;align-items:center;gap:7px;margin-bottom:5px;font-size:.82rem;}
.pedir-novo-item button{background:var(--pr);border:none;color:#fff;padding:4px 10px;border-radius:6px;cursor:pointer;font-size:.72rem;font-weight:700;flex-shrink:0;}

/* ── KDS TOGGLE ── */
.kds-toggle-row{display:flex;align-items:center;justify-content:space-between;background:#1a1a1a;border-radius:8px;padding:10px 12px;margin-bottom:10px;}
.toggle-sw{position:relative;width:44px;height:24px;cursor:pointer;}
.toggle-sw input{opacity:0;width:0;height:0;}
.toggle-sl{position:absolute;inset:0;background:#333;border-radius:12px;transition:.2s;}
.toggle-sl:before{content:'';position:absolute;width:18px;height:18px;left:3px;bottom:3px;background:#fff;border-radius:50%;transition:.2s;}
.toggle-sw input:checked+.toggle-sl{background:var(--gn);}
.toggle-sw input:checked+.toggle-sl:before{transform:translateX(20px);}

/* ── PUSH NOTIF ── */
.push-banner{background:#0d1a2a;border:1px solid #1e3a5a;border-radius:10px;padding:10px 14px;display:flex;align-items:center;gap:10px;margin-bottom:12px;}
.push-banner .pb-icon{font-size:1.4rem;}
.push-banner .pb-info{flex:1;font-size:.78rem;color:#aaa;}
.push-banner .pb-btn{background:#1e4a8a;color:#fff;border:none;padding:7px 12px;border-radius:7px;cursor:pointer;font-size:.75rem;font-weight:700;white-space:nowrap;}

/* ── PROGRAMA DE PONTOS ── */
.pontos-bar{background:linear-gradient(135deg,#1a0a2a,#2a1a4a);border:1px solid #6a3aaa;border-radius:12px;padding:11px 14px;margin-bottom:10px;display:flex;align-items:center;gap:10px;}
.pontos-bar .pb-ico{font-size:1.6rem;}
.pontos-bar .pb-info strong{display:block;color:#c084fc;font-size:.88rem;font-weight:800;}
.pontos-bar .pb-info span{font-size:.73rem;color:#aaa;}
.pontos-prog{height:7px;background:#2a1a4a;border-radius:4px;margin-top:5px;overflow:hidden;}
.pontos-prog-bar{height:100%;background:linear-gradient(90deg,#7c3aed,#c084fc);border-radius:4px;transition:.4s;}

/* ── BANNER PRATO DO DIA ── */
.prato-dia-banner{background:linear-gradient(135deg,#1a0a00,#2a1500);border:2px solid var(--gd);border-radius:14px;padding:14px;margin-bottom:18px;display:flex;align-items:center;gap:12px;cursor:pointer;position:relative;overflow:hidden;}
.prato-dia-banner::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(244,196,48,.08),transparent);pointer-events:none;}
.prato-dia-banner img{width:72px;height:72px;object-fit:cover;border-radius:10px;flex-shrink:0;border:2px solid var(--gd);}
.prato-dia-banner .pd-info{flex:1;}
.prato-dia-banner .pd-badge{background:var(--gd);color:#000;font-size:.65rem;font-weight:800;padding:2px 8px;border-radius:10px;display:inline-block;margin-bottom:4px;}
.prato-dia-banner .pd-nome{font-size:.95rem;font-weight:800;color:#fff;margin-bottom:2px;}
.prato-dia-banner .pd-preco{color:var(--gd);font-weight:800;font-size:1rem;}
.prato-dia-banner .pd-preco-old{color:#888;font-size:.75rem;text-decoration:line-through;margin-left:5px;}

/* ── SELOS NOS PRODUTOS ── */
.selo{display:inline-block;font-size:.6rem;font-weight:800;padding:2px 6px;border-radius:10px;margin-right:3px;margin-bottom:3px;}
.selo-mais{background:#1a3a1a;color:#6db46d;}
.selo-novo{background:#1a2a3a;color:#5599ff;}
.selo-picante{background:#3a1a0a;color:#ff6b35;}
.selo-veg{background:#0a2a0a;color:#4caf50;}
.selo-destaque{background:#2a1a00;color:var(--gd);}

/* ── CUPOM ── */
.cupom-box{background:#0a1a0a;border:1px dashed #2e7d32;border-radius:8px;padding:10px 12px;margin-bottom:10px;display:flex;gap:7px;align-items:center;}
.cupom-box input{flex:1;background:#111;border:1px solid #2a2a2a;color:#fff;padding:8px 10px;border-radius:6px;font-size:.85rem;text-transform:uppercase;}
.cupom-box button{background:#2e7d32;color:#fff;border:none;padding:8px 13px;border-radius:6px;font-weight:700;cursor:pointer;font-size:.82rem;white-space:nowrap;}
.cupom-ok{font-size:.78rem;color:#6db46d;margin-top:4px;}
.cupom-err{font-size:.78rem;color:#ff6666;margin-top:4px;}

/* ── META DO DIA ── */
.meta-card{background:#111;border:1px solid #222;border-radius:10px;padding:11px 13px;margin-bottom:10px;}
.meta-card .mc-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;}
.meta-card .mc-label{font-size:.75rem;color:#888;}
.meta-card .mc-val{font-size:1rem;font-weight:800;color:var(--gn);}
.meta-prog{height:8px;background:#1e1e1e;border-radius:4px;overflow:hidden;}
.meta-prog-bar{height:100%;border-radius:4px;transition:.5s;}

/* ── AVISO DELIVERY ── */
.delivery-aviso{background:#0a1a00;border:1px solid #2e7d32;border-radius:8px;padding:10px 13px;margin-bottom:12px;font-size:.8rem;color:#6db46d;display:flex;align-items:center;gap:8px;}
</style>
</head>
<body>
<header>
  <div class="logo">
    <div class="logo-icon">
      <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <!-- Contorno preto da concha -->
        <ellipse cx="28" cy="34" rx="16" ry="13" fill="#111" stroke="#000" stroke-width="2"/>
        <!-- Concha/gunkan branca -->
        <ellipse cx="28" cy="34" rx="14" ry="11" fill="white"/>
        <!-- Bolinha vermelha (sushi) -->
        <circle cx="28" cy="30" r="9" fill="#111" stroke="#000" stroke-width="1.5"/>
        <circle cx="28" cy="30" r="8" fill="#e63946"/>
        <circle cx="28" cy="30" r="3.5" fill="#111"/>
        <!-- Hashi 1 -->
        <line x1="10" y1="56" x2="40" y2="4" stroke="#111" stroke-width="4" stroke-linecap="round"/>
        <line x1="10" y1="56" x2="40" y2="4" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Hashi 2 -->
        <line x1="17" y1="58" x2="52" y2="8" stroke="#111" stroke-width="4" stroke-linecap="round"/>
        <line x1="17" y1="58" x2="52" y2="8" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="logo-txt">
      <span class="ln1">🍣 YANNI</span>
      <span class="ln2">SUSHI E RESTAURANTE · ALEGRETE PI</span>
    </div>
  </div>
  <div class="hbtns">
    <span title="Conexão"><span class="sync-dot off" id="syncDot"></span></span>
    <button class="hbtn" id="btnCmd" onclick="openComandas()">🪙 Comandas</button>
    <button class="hbtn" id="btnPed" onclick="openPedidos()" style="background:#222;border:1px solid var(--pr);color:var(--pr);">📋 Pedidos <span id="pedBadge" style="background:var(--pr);color:#fff;border-radius:10px;padding:1px 6px;font-size:.7rem;display:none;">0</span></button>
    <button class="hbtn" id="btnDeliv" onclick="openDelivery()" style="display:none;background:#222;border:1px solid #f4c430;color:#f4c430;">🛵 Delivery <span id="delivBadge" style="background:#f4c430;color:#000;border-radius:10px;padding:1px 6px;font-size:.7rem;display:none;">0</span></button>
    <button class="admin-ico" onclick="checkAdmin()" title="Admin">⚙️</button>
  </div>
</header>
<div class="cat-bar"><div class="cat-bar-inner" id="catBar"></div></div>
<!-- BANNER TEMPO ESTIMADO -->
<div class="tempo-banner" id="tempoBanner" style="display:none;">
  ⏱️ Tempo estimado: <strong id="tempoValor">30 min</strong> &nbsp;·&nbsp; 🏠 Delivery disponível em Alegrete PI
</div>

<!-- BANNER PRATO DO DIA -->
<div id="pratoDiaBanner" style="display:none;padding:10px 16px 0;max-width:1100px;margin:0 auto;"></div>

<div class="wrap" id="menuWrap"><p style="text-align:center;color:#555;margin-top:50px;">Carregando...</p></div>
<div class="cbar" id="cbar" onclick="openCart()">
  <span>🛒 Ver Pedido &nbsp;<span id="cbarCnt" style="background:rgba(0,0,0,.25);padding:2px 8px;border-radius:20px;">0</span></span>
  <span id="cbarTot">R$ 0,00</span>
</div>

<!-- CHAMAR GARÇOM (aparece quando mesa detectada) -->
<div id="btnChamarGarcom" style="display:none;position:fixed;bottom:90px;right:18px;z-index:890;">
  <button onclick="chamarGarcom()" style="background:#f4c430;color:#000;border:none;padding:12px 18px;border-radius:50px;font-weight:700;font-size:.85rem;cursor:pointer;box-shadow:0 3px 15px rgba(244,196,48,.5);display:flex;align-items:center;gap:7px;">
    <span style="font-size:1.2rem;">🔔</span> Chamar Garçom
  </button>
</div>

<!-- BOTÃO FALAR COM A GENTE (WhatsApp) -->
<div id="btnFalarWpp" style="position:fixed;bottom:90px;left:18px;z-index:890;">
  <button onclick="abrirWhatsAppDuvida()" style="background:#25D366;color:#fff;border:none;padding:11px 16px;border-radius:50px;font-weight:700;font-size:.82rem;cursor:pointer;box-shadow:0 3px 15px rgba(37,211,102,.5);display:flex;align-items:center;gap:7px;">
    <span style="font-size:1.1rem;">💬</span> Falar com a gente
  </button>
</div>

<!-- STATUS PEDIDO MESA -->
<div id="ovStatusMesa" style="display:none;position:fixed;bottom:0;left:0;right:0;background:#141414;border-top:2px solid var(--pr);padding:12px 16px;z-index:899;">
  <div style="max-width:500px;margin:0 auto;">
    <!-- Push permission banner -->
    <div class="push-banner" id="pushBanner" style="display:none;">
      <div class="pb-icon">🔔</div>
      <div class="pb-info">Quer receber avisos quando seu pedido ficar pronto?</div>
      <button class="pb-btn" onclick="pedirPermissaoPush()">Ativar</button>
      <button onclick="document.getElementById('pushBanner').style.display='none'" style="background:none;border:none;color:#555;cursor:pointer;font-size:.9rem;margin-left:4px;">✕</button>
    </div>
    <div style="display:flex;align-items:center;gap:10px;">
      <div style="flex:1;">
        <div style="font-size:.72rem;color:#888;">Seu último pedido</div>
        <div id="statusMesaTxt" style="font-size:.85rem;font-weight:700;color:var(--pr);">📋 Pedido enviado!</div>
      </div>
      <button onclick="abrirPedirNovo()" style="background:#1e1e1e;border:1px solid #333;color:#ccc;padding:6px 10px;border-radius:8px;font-size:.72rem;cursor:pointer;">🔁 Pedir de novo</button>
      <button onclick="document.getElementById('ovStatusMesa').style.display='none'" style="background:none;border:none;color:#555;font-size:1.2rem;cursor:pointer;">✕</button>
    </div>
  </div>
</div>

<!-- AVISO FECHADO -->
<div id="ovFechado" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.95);z-index:3000;padding:14px;">
  <div style="max-width:420px;margin:60px auto;background:#141414;padding:26px;border-radius:12px;border:1px solid var(--pr);text-align:center;">
    <div style="font-size:2.5rem;margin-bottom:10px;">🍣</div>
    <h2 id="fechadoTitulo" style="color:var(--pr);margin-bottom:8px;font-size:1.1rem;">Estamos fechados agora</h2>
    <p id="fechadoMsg" style="color:#aaa;font-size:.85rem;margin-bottom:18px;line-height:1.6;"></p>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <button onclick="abrirEncomenda()" style="background:var(--pr);color:#fff;border:none;padding:12px;border-radius:8px;font-weight:700;cursor:pointer;font-size:.9rem;">📅 Fazer Encomenda</button>
      <a id="wppAtendente" href="" target="_blank" style="display:block;background:#25D366;color:#fff;padding:12px;border-radius:8px;font-weight:700;text-decoration:none;font-size:.9rem;">💬 Falar com Atendente</a>
      <button onclick="cls('ovFechado')" style="background:#222;color:#aaa;border:none;padding:10px;border-radius:8px;cursor:pointer;font-size:.85rem;">Ver cardápio mesmo assim</button>
    </div>
  </div>
</div>

<!-- ENCOMENDA -->
<div class="ov" id="ovEncomenda"><div class="box" style="max-width:480px;">
  <h2>📅 Fazer Encomenda</h2>
  <p style="font-size:.8rem;color:#aaa;margin-bottom:14px;">Faça sua encomenda com antecedência e entraremos em contato para confirmar!</p>
  <div class="fg"><label>👤 Seu nome *</label><input type="text" id="encNome" placeholder="Ex: João Silva" style="width:100%;padding:9px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;"></div>
  <div class="fg"><label>📱 Seu WhatsApp *</label><input type="tel" id="encFone" placeholder="Ex: 89981234567" style="width:100%;padding:9px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;"></div>
  <div class="fg"><label>📅 Data e horário desejado</label><input type="datetime-local" id="encData" style="width:100%;padding:9px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;"></div>
  <div class="fg"><label>📝 O que deseja encomendar?</label><textarea id="encPedido" placeholder="Ex: 50 peças de sushi variado, 2 temakis..." style="width:100%;padding:9px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;min-height:80px;resize:vertical;"></textarea></div>
  <div class="fg">
    <label>📍 Entrega ou retirada?</label>
    <select id="encTipo" style="width:100%;padding:9px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;">
      <option value="retirada">🏪 Retiro no restaurante</option>
      <option value="delivery">🏠 Entrega em Alegrete PI</option>
    </select>
  </div>
  <button class="bpr" onclick="enviarEncomenda()">📲 Enviar Encomenda via WhatsApp</button>
  <button class="bsc" onclick="cls('ovEncomenda')">Cancelar</button>
</div></div>

<!-- CART -->
<div class="ov" id="ovCart"><div class="box">
  <h2>🛒 Seu Pedido</h2>
  <div id="cartList"></div>
  <!-- AVISO DELIVERY -->
  <div class="delivery-aviso" id="avisoDelivery" style="display:none;">
    🛵 <span>Delivery apenas em <strong>Alegrete-PI</strong> · Taxa <strong>R$ 3,00</strong></span>
  </div>

  <!-- TIPO DE PEDIDO -->
  <p style="font-size:.8rem;color:#888;margin:10px 0 7px;">📍 Como quer receber?</p>
  <div style="display:flex;gap:7px;margin-bottom:12px;">
    <div id="tipoDel" onclick="selTipo('delivery')" style="flex:1;padding:10px;background:#1e1e1e;border:2px solid #333;border-radius:8px;cursor:pointer;text-align:center;transition:.14s;">
      <div style="font-size:1.3rem;">🏠</div>
      <div style="font-size:.78rem;font-weight:700;margin-top:3px;">Delivery</div>
      <div style="font-size:.65rem;color:#888;">+R$ 3,00</div>
    </div>
    <div id="tipoRet" onclick="selTipo('retirada')" style="flex:1;padding:10px;background:#1e1e1e;border:2px solid #333;border-radius:8px;cursor:pointer;text-align:center;transition:.14s;">
      <div style="font-size:1.3rem;">🏪</div>
      <div style="font-size:.78rem;font-weight:700;margin-top:3px;">Retirada</div>
      <div style="font-size:.65rem;color:#888;">No restaurante</div>
    </div>
  </div>
  <!-- ENDEREÇO (só delivery) -->
  <div id="enderecoBox" style="display:none;">
    <div class="fg">
      <label>📍 Endereço de entrega (Alegrete PI)</label>
      <input type="text" id="endCliente" placeholder="Rua, número, bairro..." style="width:100%;padding:9px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;font-size:.9rem;">
    </div>
  </div>
  <!-- NOME -->
  <div class="fg">
    <label>👤 Seu nome *</label>
    <input type="text" id="nomeCliente" placeholder="Ex: João Silva" style="width:100%;padding:9px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;font-size:.9rem;">
  </div>
  <!-- MESA (aparece se veio por QR Code) -->
  <div class="fg" id="mesaBox" style="display:none;">
    <label>🪑 Mesa</label>
    <input type="text" id="mesaCliente" placeholder="Ex: Mesa 5" style="width:100%;padding:9px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;font-size:.9rem;">
  </div>
  <!-- WHATSAPP -->
  <div class="fg">
    <label>📱 Seu WhatsApp (opcional)</label>
    <input type="tel" id="foneCliente" placeholder="Ex: 89981234567" style="width:100%;padding:9px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;font-size:.9rem;">
  </div>
  <!-- PONTOS DO CLIENTE -->
  <div class="pontos-bar" id="pontosBarCart" style="display:none;">
    <div class="pb-ico">⭐</div>
    <div class="pb-info" style="flex:1;">
      <strong id="pontosClienteNome">Seus pontos</strong>
      <span id="pontosClienteInfo">Carregando...</span>
      <div class="pontos-prog"><div class="pontos-prog-bar" id="pontosProgBar" style="width:0%"></div></div>
    </div>
  </div>

  <!-- CUPOM DE DESCONTO -->
  <div class="cupom-box">
    <input type="text" id="cupomInput" placeholder="CUPOM DE DESCONTO" maxlength="20">
    <button onclick="aplicarCupom()">Aplicar</button>
  </div>
  <div id="cupomMsg"></div>

  <!-- OBSERVAÇÕES -->
  <div class="obs-box">
    <label>💬 Observações</label>
    <textarea id="obsCliente" placeholder="Ex: sem cebolinha, sem gergelim..."></textarea>
  </div>
  <!-- PAGAMENTO -->
  <p style="font-size:.8rem;color:#888;margin-bottom:8px;">💳 Forma de pagamento:</p>
  <div class="popt" id="popt-mp" onclick="selPay('mp')"><div class="pico">💳</div><div class="pinf"><strong>Infinite Pay</strong><span>Cartão crédito/débito online</span></div></div>
  <div id="det-mp" class="pdet">
    <div style="background:#0a1a0a;border:1px solid #1e4a1e;border-radius:8px;padding:10px;margin-bottom:10px;">
      <p style="font-size:.8rem;color:#6db46d;font-weight:700;margin-bottom:4px;">🔒 Seu pedido só entra quando o pagamento for confirmado automaticamente!</p>
    </div>
    <select class="parc-sel" id="parcSel" onchange="calcParc()">
      <option value="1">À vista</option><option value="2">2x</option><option value="3">3x</option>
      <option value="4">4x</option><option value="6">6x</option><option value="12">12x</option>
    </select>
    <p class="parc-info" id="parcInfo"></p>
    <!-- Botão principal: registra pedido e abre InfinitePay -->
    <button id="btnRegistrarPagarMp" onclick="registrarEPagar()" style="width:100%;padding:13px;background:var(--pr);color:#fff;border:none;border-radius:9px;font-weight:800;font-size:.97rem;cursor:pointer;margin-top:8px;">💳 Registrar Pedido e Pagar</button>
    <!-- Box de aguardo automático (aparece após clicar) -->
    <div id="aguardandoPagBox" style="display:none;margin-top:12px;background:#0d1a0d;border:1px solid #1e4a1e;border-radius:8px;padding:14px;text-align:center;">
      <div style="font-size:1.4rem;margin-bottom:6px;">⏳</div>
      <p style="font-size:.85rem;color:#6db46d;font-weight:700;margin-bottom:4px;">Aguardando confirmação do pagamento...</p>
      <p style="font-size:.74rem;color:#aaa;margin-bottom:10px;">Conclua o pagamento no site da InfinitePay. Seu pedido será confirmado automaticamente!</p>
      <div id="dotLoader" style="display:flex;justify-content:center;gap:6px;margin-bottom:10px;">
        <span style="width:8px;height:8px;background:#6db46d;border-radius:50%;animation:pulse 1.2s infinite;"></span>
        <span style="width:8px;height:8px;background:#6db46d;border-radius:50%;animation:pulse 1.2s .4s infinite;"></span>
        <span style="width:8px;height:8px;background:#6db46d;border-radius:50%;animation:pulse 1.2s .8s infinite;"></span>
      </div>
      <p style="font-size:.72rem;color:#555;">Pedido ID: <span id="pedIdShow" style="color:#888;"></span></p>
    </div>
    <!-- Box de sucesso (aparece quando confirmado) -->
    <div id="pagConfirmadoBox" style="display:none;margin-top:12px;background:#0a1a0a;border:1px solid #2e7d32;border-radius:8px;padding:14px;text-align:center;">
      <div style="font-size:2rem;margin-bottom:6px;">✅</div>
      <p style="font-size:.95rem;color:#6db46d;font-weight:800;margin-bottom:4px;">Pagamento confirmado!</p>
      <p style="font-size:.78rem;color:#aaa;">Seu pedido foi registrado e está sendo preparado. 🍣</p>
    </div>
  </div>

  <div class="popt" id="popt-pix" onclick="selPay('pix')"><div class="pico">📱</div><div class="pinf"><strong>Pix</strong><span>Transferência instantânea</span></div></div>
  <div id="det-pix" class="pdet">
    <div style="background:#0a1a0a;border:1px solid #1e4a1e;border-radius:8px;padding:10px;margin-bottom:10px;">
      <p style="font-size:.8rem;color:#6db46d;font-weight:700;margin-bottom:4px;">🔒 Seu pedido só entra quando o Pix for confirmado automaticamente!</p>
    </div>
    <!-- QR Code Pix -->
    <div style="text-align:center;margin-bottom:10px;">
      <div id="pixQrBox" style="background:#fff;display:inline-block;padding:8px;border-radius:8px;margin-bottom:6px;">
        <img id="pixQrImg" src="" style="width:160px;height:160px;display:block;" alt="QR Code Pix">
      </div>
      <p style="font-size:.75rem;color:#aaa;">Escaneie o QR Code ou copie a chave abaixo</p>
    </div>
    <p style="font-size:.78rem;color:#aaa;margin-bottom:4px;">Chave Pix:</p>
    <p class="pix-chave" id="pixChaveShow" onclick="copiarPix()" style="cursor:pointer;" title="Clique para copiar">89981216999 📋</p>
    <p style="font-size:.72rem;color:#888;margin-top:4px;margin-bottom:10px;">Clique na chave para copiar</p>
    <!-- Botão registrar pedido e aguardar Pix -->
    <button id="btnRegistrarPagarPix" onclick="registrarEAguardarPix()" style="width:100%;padding:13px;background:#128C7E;color:#fff;border:none;border-radius:9px;font-weight:800;font-size:.97rem;cursor:pointer;">📱 Registrar Pedido e Aguardar Pix</button>
    <!-- Box de aguardo Pix -->
    <div id="aguardandoPixBox" style="display:none;margin-top:12px;background:#0d1a0d;border:1px solid #1e4a1e;border-radius:8px;padding:14px;text-align:center;">
      <div style="font-size:1.4rem;margin-bottom:6px;">⏳</div>
      <p style="font-size:.85rem;color:#6db46d;font-weight:700;margin-bottom:4px;">Aguardando confirmação do Pix...</p>
      <p style="font-size:.74rem;color:#aaa;margin-bottom:10px;">Pague o Pix acima. Seu pedido será confirmado automaticamente!</p>
      <div style="display:flex;justify-content:center;gap:6px;margin-bottom:10px;">
        <span style="width:8px;height:8px;background:#6db46d;border-radius:50%;animation:pulse 1.2s infinite;"></span>
        <span style="width:8px;height:8px;background:#6db46d;border-radius:50%;animation:pulse 1.2s .4s infinite;"></span>
        <span style="width:8px;height:8px;background:#6db46d;border-radius:50%;animation:pulse 1.2s .8s infinite;"></span>
      </div>
    </div>
    <!-- Sucesso Pix -->
    <div id="pixConfirmadoBox" style="display:none;margin-top:12px;background:#0a1a0a;border:1px solid #2e7d32;border-radius:8px;padding:14px;text-align:center;">
      <div style="font-size:2rem;margin-bottom:6px;">✅</div>
      <p style="font-size:.95rem;color:#6db46d;font-weight:800;margin-bottom:4px;">Pix confirmado!</p>
      <p style="font-size:.78rem;color:#aaa;">Seu pedido foi registrado e está sendo preparado. 🍣</p>
    </div>
  </div>

  <div class="popt" id="popt-din" onclick="selPay('din')"><div class="pico">💵</div><div class="pinf"><strong>Dinheiro na entrega</strong><span>Paga quando chegar</span></div></div>
  <div class="popt" id="popt-cart" onclick="selPay('cart')"><div class="pico">🏧</div><div class="pinf"><strong>Cartão na entrega</strong><span>Débito ou crédito na maquininha</span></div></div>
  <div class="ctrow"><span>Total</span><span id="cartTotModal">R$ 0,00</span></div>
  <!-- Botão enviar: só aparece para dinheiro/cartão na entrega -->
  <button class="bpr" id="btnEnviarPedido" onclick="enviarWpp()" style="display:none;">📲 Enviar Pedido via WhatsApp</button>
  <button class="bsc" onclick="cls('ovCart')">Fechar</button>
</div></div>

<!-- PEDIDOS -->
<div class="ov" id="ovPedidos"><div class="box" style="max-width:660px;">
  <h2>📋 Pedidos</h2>
  <div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap;">
    <button onclick="filtroPed('todos',this)" class="bst bst-conf" style="opacity:1;" id="fp-todos">Todos</button>
    <button onclick="filtroPed('novo',this)" class="bst" style="background:#1a2a3a;color:#5599ff;">Novos</button>
    <button onclick="filtroPed('confirmado',this)" class="bst bst-conf">Confirmados</button>
    <button onclick="filtroPed('preparo',this)" class="bst bst-prep">Em preparo</button>
    <button onclick="filtroPed('entrega',this)" class="bst bst-entr">Entrega</button>
    <button onclick="filtroPed('entregue',this)" class="bst bst-ok">Entregues</button>
  </div>
  <div id="pedList" style="max-height:500px;overflow-y:auto;"></div>
  <button class="bsc" onclick="cls('ovPedidos')">Fechar</button>
</div></div>

<!-- ADMIN -->
<div class="ov" id="ovAdmin"><div class="box">
  <h2>⚙️ Painel de Controle — Yanni Sushi</h2>
  <div class="tabs">
    <button class="tb on" onclick="showTab('tAdd',this)">➕ Prod.</button>
    <button class="tb" onclick="showTab('tCats',this)">🗂️ Cats</button>
    <button class="tb" onclick="showTab('tList',this)">📋 Lista</button>
    <button id="btnTabEst" class="tb" onclick="showTab('tEst',this);renderEstoque()">📦 Estoque</button>
    <button class="tb" onclick="showTab('tBalc',this)">🍺 Balcão</button>
    <button id="btnTabRel" class="tb" onclick="showTab('tRel',this);renderRel()">📊 Relat.</button>
    <button class="tb" onclick="showTab('tQr',this);renderQR()">🪑 QR</button>
    <button class="tb" onclick="showTab('tCrm',this);renderCrm()">👥 CRM</button>
    <button class="tb" onclick="showTab('tFid',this);renderFidelidade()">⭐ Fidelidade</button>
    <button class="tb" onclick="showTab('tPromo',this)">🎟️ Promoções</button>
    <button class="tb" onclick="showTab('tIa',this)">🤖 Suki</button>
    <button id="btnTabCfg" class="tb" onclick="showTab('tCfg',this)">🔧 Config</button>
  </div>
  <div id="tAdd" class="tc on">
    <div class="fg"><label>Categoria *</label><select id="fCat"></select></div>
    <div class="fg"><label>Nome *</label><input type="text" id="fNome" placeholder="Ex: Temaki Philadelphia"></div>
    <div class="fg"><label>Descrição</label><input type="text" id="fDesc" placeholder="Ex: Com cream cheese"></div>
    <div class="fg"><label>Preço (R$) *</label><input type="number" id="fPreco" placeholder="0.00" step="0.01" min="0"></div>
    <div class="fg"><label>📦 Estoque inicial (deixe 0 para ilimitado)</label><input type="number" id="fEstoque" placeholder="0" min="0" value="0"></div>
    <div class="fg">
      <label>📷 Imagem</label>
      <div style="display:flex;gap:6px;margin-bottom:7px;">
        <button type="button" id="btnTabUrl" onclick="imgTab('url')" style="flex:1;padding:7px;border-radius:6px;border:2px solid var(--pr);background:var(--pr);color:#fff;font-weight:700;font-size:.8rem;cursor:pointer;">🔗 Link</button>
        <button type="button" id="btnTabUp" onclick="imgTab('up')" style="flex:1;padding:7px;border-radius:6px;border:2px solid #333;background:#222;color:#aaa;font-weight:700;font-size:.8rem;cursor:pointer;">📁 Arquivo</button>
      </div>
      <div id="tabUrl"><input type="text" id="fImg" placeholder="Cole o link..." oninput="prvImg(this.value);document.getElementById('fImgB64').value='';"></div>
      <div id="tabUp" style="display:none;">
        <label for="fImgFile" style="display:flex;align-items:center;gap:10px;padding:12px;background:#1e1e1e;border:2px dashed #333;border-radius:8px;cursor:pointer;font-size:.85rem;color:#aaa;">
          <span style="font-size:1.6rem;">📂</span><span>Clique para escolher<br><span style="font-size:.72rem;color:#555;">JPG, PNG — até 2MB</span></span>
        </label>
        <input type="file" id="fImgFile" accept="image/*" style="display:none;" onchange="handleImgUpload(this)">
        <input type="hidden" id="fImgB64">
      </div>
      <img id="imgPrev" src="" alt="">
    </div>
    <input type="hidden" id="editId">
    <button class="bpr" id="btnSv" onclick="saveProd()">✅ Adicionar Produto</button>
    <button class="bsc" id="btnCE" style="display:none" onclick="cancelEdit()">✕ Cancelar</button>
    <p class="mok" id="mok">Salvo! ✓</p>
  </div>
  <div id="tCats" class="tc">
    <div class="fg"><label>Nova categoria</label><input type="text" id="fNewCat" placeholder="Ex: Combos, Sobremesas..."></div>
    <button class="bpr" onclick="addCat()">➕ Criar</button>
    <p style="font-size:.78rem;color:#888;margin:12px 0 7px;">Cadastradas (clique ✏️ para renomear):</p>
    <div class="cchips" id="catChips"></div>
  </div>
  <div id="tList" class="tc">
    <div class="fg"><input type="text" id="srch" placeholder="🔍 Buscar..." oninput="renderAList()"></div>
    <p style="font-size:.75rem;color:#888;margin-bottom:8px;" id="aCnt"></p>
    <div class="apl" id="aProdList"></div>
  </div>
  <div id="tEst" class="tc">
    <p style="font-size:.79rem;color:#aaa;margin-bottom:11px;">Controle de estoque. <b style="color:var(--gd);">0 = ilimitado</b>. Quando zerar, some do cardápio.</p>
    <div id="estList"></div>
  </div>
  <div id="tBalc" class="tc">
    <p style="font-size:.79rem;color:#aaa;margin-bottom:11px;">Itens avulsos para comandas.</p>
    <div id="balcList"></div>
    <div style="display:flex;gap:7px;margin-top:11px;align-items:center;">
      <input type="text" id="bNome" placeholder="Nome" style="flex:1;padding:8px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;font-size:.85rem;">
      <input type="number" id="bPreco" placeholder="R$" step="0.01" style="width:75px;padding:8px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;font-size:.85rem;">
      <button onclick="addBalcItem()" style="background:var(--pr);border:none;color:#fff;padding:8px 13px;border-radius:6px;cursor:pointer;font-weight:700;font-size:1rem;">+</button>
    </div>
  </div>
  <div id="tRel" class="tc">
    <div class="rel-filtros">
      <select id="relTipo" onchange="renderRel()">
        <option value="dia">📅 Hoje</option>
        <option value="semana">📅 Esta semana</option>
        <option value="mes" selected>📅 Este mês</option>
        <option value="ano">📅 Este ano</option>
      </select>
      <select id="relCat" onchange="renderRel()"><option value="">Todas categorias</option></select>
    </div>
    <div id="relSumCards" class="rel-sumcards"></div>
    <div id="relList"></div>
  </div>
  <!-- QR MESAS -->
  <div id="tQr" class="tc">
    <p style="font-size:.79rem;color:#aaa;margin-bottom:11px;">Gere os QR Codes das mesas. O cliente escaneia e já abre o cardápio com a mesa identificada!</p>
    <div style="display:flex;align-items:center;gap:7px;margin-bottom:12px;">
      <label style="font-size:.82rem;color:#aaa;">Quantas mesas?</label>
      <input type="number" id="qtdMesas" value="15" min="1" max="50" style="width:70px;padding:8px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;">
      <button onclick="renderQR()" style="padding:8px 14px;background:var(--pr);color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:700;font-size:.82rem;">Gerar</button>
    </div>
    <div id="qrList" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:10px;max-height:380px;overflow-y:auto;"></div>
    <button onclick="imprimirQRs()" class="bgn" style="margin-top:12px;">🖨️ Imprimir todos</button>
  </div>

  <div id="tCfg" class="tc">
    <div style="background:#1a1a1a;border-radius:8px;padding:12px;margin-bottom:14px;">
      <p style="font-size:.82rem;font-weight:700;margin-bottom:8px;">🔴 Modo Recesso</p>
      <p style="font-size:.75rem;color:#888;margin-bottom:10px;">Quando ativado, o site mostra aviso de recesso para os clientes.</p>
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <span id="recessoStatus" style="font-size:.85rem;color:var(--gn);">● Restaurante aberto</span>
        <button id="btnRecesso" onclick="toggleRecesso()" style="padding:8px 16px;border-radius:6px;border:none;font-weight:700;cursor:pointer;font-size:.82rem;background:#2a1a1a;color:#ff6666;">Ativar Recesso</button>
      </div>
    </div>
    <div class="fg"><label>📱 WhatsApp do restaurante</label><input type="text" id="cfFone" placeholder="5589981216999"></div>
    <div class="fg"><label>📲 WhatsApp da Cozinha (recebe pedidos)</label><input type="text" id="cfFoneCozinha" placeholder="5589981216999"></div>
    <!-- KDS TOGGLE -->
    <div class="kds-toggle-row">
      <div>
        <div style="font-size:.84rem;font-weight:700;">📺 Enviar pedido para cozinha via WhatsApp</div>
        <div style="font-size:.74rem;color:#888;margin-top:2px;">Quando desligado, usa apenas o KDS interno</div>
      </div>
      <label class="toggle-sw">
        <input type="checkbox" id="cfKdsWpp" checked>
        <span class="toggle-sl"></span>
      </label>
    </div>
    <div class="fg"><label>🔑 Chave Pix</label><input type="text" id="cfPix" placeholder="CPF, telefone ou email"></div>
    <div class="fg"><label>⏱️ Tempo estimado delivery (min)</label><input type="number" id="cfTempo" placeholder="30" value="30"></div>
    <!-- IMPRESSORAS -->
    <div style="background:#1a1a1a;border:1px solid #333;border-radius:8px;padding:12px;margin-bottom:12px;">
      <div style="font-size:.84rem;font-weight:700;margin-bottom:8px;">🖨️ Impressoras</div>
      <div class="fg"><label>🖨️ IP da Epson TM-T20X (rede local)</label><input type="text" id="cfEpsonIp" placeholder="Ex: 192.168.1.100"></div>
      <div style="font-size:.72rem;color:#888;margin-top:-6px;margin-bottom:8px;">Conecte a Epson no Wi-Fi e configure o IP fixo nas config. da impressora</div>
      <div class="fg"><label>📱 Geday Bluetooth (nome do dispositivo)</label><input type="text" id="cfGedayNome" placeholder="Ex: Geday-BT ou RPP02N"></div>
      <div style="font-size:.72rem;color:#888;margin-top:-6px;">Pareie a Geday com o celular/tablet do garçom via Bluetooth antes de usar</div>
    </div>
    <div class="fg">
      <label>🖼️ Logo do restaurante</label>
      <div style="display:flex;gap:7px;align-items:center;margin-top:4px;">
        <label for="cfLogoFile" style="flex:1;display:flex;align-items:center;gap:8px;padding:9px 12px;background:#1e1e1e;border:2px dashed #333;border-radius:7px;cursor:pointer;font-size:.82rem;color:#aaa;">
          <span style="font-size:1.4rem;">📂</span><span>Clique para escolher logo</span>
        </label>
        <input type="file" id="cfLogoFile" accept="image/*" style="display:none;" onchange="handleLogoUpload(this)">
      </div>
      <img id="logoPreview" style="height:50px;margin-top:8px;display:none;object-fit:contain;">
    </div>
    <div style="background:#1a1a1a;border:1px solid #333;border-radius:8px;padding:12px;margin-bottom:12px;">
      <div style="font-size:.84rem;font-weight:700;margin-bottom:8px;">🛵 Delivery</div>
      <div class="fg"><label>💰 Taxa de entrega (R$) — altere sem precisar de código</label><input type="number" id="cfTaxaEntrega" placeholder="3.00" step="0.50" min="0" value="3"></div>
      <div class="fg"><label>📱 WhatsApp do entregador</label><input type="text" id="cfWhatsEntregador" placeholder="5589981216999"></div>
      <div style="font-size:.72rem;color:#888;">Delivery só dentro de Alegrete-PI. Pedidos chegam por WhatsApp + painel.</div>
    </div>
    <div style="background:#1a1a1a;border:1px solid #333;border-radius:8px;padding:12px;margin-bottom:12px;">
      <div style="font-size:.84rem;font-weight:700;margin-bottom:8px;">🔐 Senhas</div>
      <div class="fg"><label>👑 Nova senha do dono (acesso total)</label><input type="password" id="cfPass" placeholder="Deixe vazio para manter"></div>
      <div class="fg"><label>⚙️ Nova senha do admin (só cardápio)</label><input type="password" id="cfPassAdmin" placeholder="Deixe vazio para manter"></div>
      <div class="fg"><label>👤 Senha geral do garçom</label><input type="password" id="cfPassGarcom" placeholder="Atual: 4321"></div>
    </div>
    <button class="bpr" onclick="saveCfg()">💾 Salvar tudo</button>
    <div style="margin-top:18px;border-top:1px solid #222;padding-top:14px;">
      <button class="bwn" onclick="resetAll()">🗑️ Resetar tudo</button>
    </div>
  </div>
  <!-- CRM TAB -->
  <div id="tCrm" class="tc">
    <p style="font-size:.79rem;color:#aaa;margin-bottom:11px;">Clientes que fizeram pedido. Clique em WhatsApp para enviar mensagem personalizada.</p>
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;">
      <button onclick="filtroCrm('todos',this)" class="bst bst-conf" style="opacity:1;">Todos</button>
      <button onclick="filtroCrm('frequente',this)" class="bst bst-prep">Frequentes 🟢</button>
      <button onclick="filtroCrm('sumiu',this)" class="bst bst-entr">Sumiram 🔴</button>
      <button onclick="filtroCrm('novo',this)" class="bst bst-ok">Novos 🔵</button>
    </div>
    <div id="crmList" style="max-height:400px;overflow-y:auto;"></div>
  </div>

  <!-- FIDELIDADE TAB -->
  <div id="tFid" class="tc">
    <div style="background:#1a0a2a;border:1px solid #6a3aaa;border-radius:10px;padding:13px;margin-bottom:14px;">
      <p style="font-size:.84rem;font-weight:800;color:#c084fc;margin-bottom:6px;">⭐ Programa de Pontos</p>
      <p style="font-size:.76rem;color:#aaa;margin-bottom:10px;">A cada R$ 1,00 gasto = 1 ponto · 500 pontos = Temaki Grande grátis (R$ 37)</p>
      <div style="display:flex;gap:7px;margin-bottom:8px;">
        <div style="flex:1;background:#111;border-radius:7px;padding:9px;text-align:center;">
          <div style="font-size:.7rem;color:#888;">Pontos para temaki pequeno</div>
          <input type="number" id="cfPontosP" value="300" style="width:80px;background:transparent;border:none;color:#c084fc;font-size:1.2rem;font-weight:800;text-align:center;">
          <div style="font-size:.68rem;color:#555;">= R$ 300 gastos</div>
        </div>
        <div style="flex:1;background:#111;border-radius:7px;padding:9px;text-align:center;">
          <div style="font-size:.7rem;color:#888;">Pontos para temaki grande</div>
          <input type="number" id="cfPontosG" value="500" style="width:80px;background:transparent;border:none;color:#c084fc;font-size:1.2rem;font-weight:800;text-align:center;">
          <div style="font-size:.68rem;color:#555;">= R$ 500 gastos</div>
        </div>
      </div>
      <button onclick="salvarPontos()" style="width:100%;padding:9px;background:#7c3aed;color:#fff;border:none;border-radius:7px;font-weight:700;cursor:pointer;">💾 Salvar configuração de pontos</button>
    </div>
    <p style="font-size:.8rem;font-weight:700;margin-bottom:8px;color:#aaa;">👥 Clientes com pontos:</p>
    <div id="fidList" style="max-height:350px;overflow-y:auto;"></div>
  </div>

  <!-- PROMOÇÕES TAB -->
  <div id="tPromo" class="tc">
    <!-- Prato do Dia -->
    <div style="background:#1a1000;border:1px solid var(--gd);border-radius:10px;padding:13px;margin-bottom:14px;">
      <p style="font-size:.84rem;font-weight:800;color:var(--gd);margin-bottom:8px;">🌟 Prato do Dia</p>
      <div class="fg"><label>Selecione o produto destaque</label>
        <select id="pratoDiaSel" style="width:100%;padding:9px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;"></select>
      </div>
      <div class="fg"><label>Preço promocional (deixe 0 para manter o preço normal)</label>
        <input type="number" id="pratoDiaPreco" placeholder="0.00" step="0.01" style="width:100%;padding:9px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;">
      </div>
      <div class="fg"><label>Mensagem do banner</label>
        <input type="text" id="pratoDiaMsg" placeholder="Ex: Oferta especial de hoje!" style="width:100%;padding:9px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;">
      </div>
      <div style="display:flex;gap:7px;">
        <button onclick="salvarPratoDia()" style="flex:1;padding:9px;background:var(--gd);color:#000;border:none;border-radius:7px;font-weight:700;cursor:pointer;">✅ Ativar Prato do Dia</button>
        <button onclick="removerPratoDia()" style="padding:9px 13px;background:#2a2a2a;color:#ff6666;border:1px solid #ff4444;border-radius:7px;cursor:pointer;font-size:.82rem;">✕ Remover</button>
      </div>
    </div>

    <!-- Cupons -->
    <div style="background:#0a1a0a;border:1px solid #2e7d32;border-radius:10px;padding:13px;margin-bottom:14px;">
      <p style="font-size:.84rem;font-weight:800;color:#6db46d;margin-bottom:8px;">🎟️ Cupons de Desconto</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-bottom:8px;">
        <div class="fg"><label>Código do cupom</label>
          <input type="text" id="cupomCod" placeholder="Ex: SUSHI10" style="width:100%;padding:8px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;text-transform:uppercase;"></div>
        <div class="fg"><label>Desconto (%)</label>
          <input type="number" id="cupomDesc" placeholder="10" min="1" max="100" style="width:100%;padding:8px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;"></div>
      </div>
      <div class="fg"><label>Usos máximos (0 = ilimitado)</label>
        <input type="number" id="cupomUsos" placeholder="0" style="width:100%;padding:8px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;"></div>
      <button onclick="criarCupom()" style="width:100%;padding:9px;background:#2e7d32;color:#fff;border:none;border-radius:7px;font-weight:700;cursor:pointer;">➕ Criar Cupom</button>
      <div id="cupomList" style="margin-top:10px;max-height:200px;overflow-y:auto;"></div>
    </div>

    <!-- Meta do dia -->
    <div style="background:#0a0a1a;border:1px solid #2a2a5a;border-radius:10px;padding:13px;">
      <p style="font-size:.84rem;font-weight:800;color:#5599ff;margin-bottom:8px;">🎯 Meta Diária de Faturamento</p>
      <div class="fg"><label>Meta do dia (R$)</label>
        <input type="number" id="cfMeta" placeholder="500.00" step="10" style="width:100%;padding:9px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;"></div>
      <button onclick="salvarMeta()" style="width:100%;padding:9px;background:#2a2a6a;color:#fff;border:none;border-radius:7px;font-weight:700;cursor:pointer;">💾 Salvar Meta</button>
    </div>
  </div>

  <!-- IA TAB -->
  <div id="tIa" class="tc">
    <p style="font-size:.79rem;color:#aaa;margin-bottom:11px;">🤖 <strong style="color:#c084fc;">Suki</strong> — sua assistente virtual! Ela usa os dados reais do Yanni Sushi para responder.</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:10px;">
      <button onclick="iaPerguntar('Suki, analise as vendas de hoje e me diga o faturamento, o prato mais vendido e algum alerta importante.')" class="bst bst-conf" style="padding:8px;font-size:.72rem;">📊 Análise do dia</button>
      <button onclick="iaPerguntar('Suki, quais são os 5 pratos mais vendidos? E quais devo promover ou tirar do cardápio?')" class="bst bst-prep" style="padding:8px;font-size:.72rem;">🍽️ Melhores pratos</button>
      <button onclick="iaPerguntar('Suki, analise o perfil dos clientes. Quais são os mais frequentes? Algum sumiu recentemente?')" class="bst bst-entr" style="padding:8px;font-size:.72rem;">👥 Perfil clientes</button>
      <button onclick="iaPerguntar('Suki, me dê 3 sugestões práticas do que posso fazer hoje para aumentar as vendas do restaurante.')" class="bst bst-ok" style="padding:8px;font-size:.72rem;">💡 Sugestões</button>
    </div>
    <div style="display:flex;gap:7px;margin-bottom:10px;">
      <input type="text" id="iaInput" placeholder="Pergunte para a Suki sobre o restaurante..." style="flex:1;padding:9px;background:#1e1e1e;border:1px solid #333;border-radius:7px;color:#fff;font-size:.85rem;" onkeydown="if(event.key==='Enter')iaEnviar()">
      <button onclick="iaEnviar()" style="background:var(--pr);border:none;color:#fff;padding:9px 14px;border-radius:7px;cursor:pointer;font-weight:700;">➤</button>
    </div>
    <div id="iaResposta" style="background:#111;border-radius:8px;padding:12px;min-height:80px;font-size:.84rem;line-height:1.6;color:#ccc;white-space:pre-wrap;max-height:350px;overflow-y:auto;">
      <span style="color:#555;">A IA vai responder aqui usando os dados reais do seu restaurante...</span>
    </div>
  </div>

  <button class="bsc" onclick="cls('ovAdmin');document.getElementById('menuWrap').classList.remove('admin-mode')">Fechar Painel</button>
</div></div>

<!-- DELIVERY MODAL -->
<div class="ov" id="ovDelivery"><div class="box" style="max-width:480px;">
  <h2>🛵 Pedidos de Delivery</h2>
  <div style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap;">
    <button onclick="filtroDeliv('todos',this)" class="bst bst-conf" style="opacity:1;">Todos</button>
    <button onclick="filtroDeliv('novo',this)" class="bst" style="background:#1a2a3a;color:#5599ff;">Novos</button>
    <button onclick="filtroDeliv('confirmado',this)" class="bst bst-conf">Confirmados</button>
    <button onclick="filtroDeliv('entrega',this)" class="bst bst-entr">Em entrega</button>
    <button onclick="filtroDeliv('entregue',this)" class="bst bst-ok">Entregues</button>
  </div>
  <div id="delivList" style="max-height:480px;overflow-y:auto;"></div>
  <button class="bsc" onclick="cls('ovDelivery')">Fechar</button>
</div></div>

<!-- COMANDAS — MAPA DE MESAS -->
<div class="ov" id="ovCmd"><div class="box" style="max-width:780px;">
  <h2>🪙 Comandas — Mapa de Mesas</h2>

  <!-- TABS -->
  <div style="display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap;">
    <button onclick="cmdTab('mapa',this)" class="tb on" id="tabMapa">🗺️ Mesas</button>
    <button onclick="cmdTab('garcons',this)" class="tb" id="tabGarcons">👤 Garçons</button>
    <button onclick="cmdTab('kds',this)" class="tb" id="tabKds">📺 Cozinha (KDS)</button>
  </div>

  <!-- MAPA DE MESAS -->
  <div id="cmdTabMapa">
    <div id="mesaGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(90px,1fr));gap:8px;margin-bottom:14px;"></div>
    <div id="cmdDetalhe" style="display:none;">
      <div class="cmd-mesa-banner">
        <div class="cmb-icon">🪑</div>
        <div class="cmb-info">
          <strong id="cmdDetalheNome"></strong>
          <span>Itens adicionados nesta mesa</span>
        </div>
        <button onclick="fecharDetalhe()" style="background:rgba(0,0,0,.3);border:none;color:#fff;font-size:1.1rem;cursor:pointer;margin-left:auto;width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;">✕</button>
      </div>
      <!-- ITENS DA COMANDA -->
      <div id="cmdDetalheItens" style="max-height:260px;overflow-y:auto;margin-bottom:10px;"></div>
      <!-- TOTAL -->
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-top:2px solid #222;margin-bottom:10px;">
        <span style="font-weight:800;font-size:1rem;">Total</span>
        <span id="cmdDetalheTot" style="color:var(--pr);font-weight:800;font-size:1.2rem;"></span>
      </div>
      <!-- BOTÃO ENVIAR PRA COZINHA -->
      <div id="btnEnviarCozinhaWrap" style="display:none;margin-bottom:8px;">
        <button id="btnEnviarCozinha" onclick="enviarCarrinhoCozinha()" style="width:100%;padding:12px;background:#ff6600;color:#fff;border:none;border-radius:8px;cursor:pointer;font-weight:800;font-size:.9rem;">📲 Enviar para a Cozinha</button>
      </div>
      <!-- BOTÕES -->
      <div style="display:flex;gap:6px;flex-wrap:wrap;">
        <button onclick="abrirCardapioComanda()" style="flex:1;background:var(--pr);color:#fff;border:none;padding:10px;border-radius:8px;cursor:pointer;font-weight:700;font-size:.82rem;">🍽️ + Adicionar</button>
        <button onclick="abrirTransfer()" style="background:#2a2a2a;color:#fff;border:none;padding:10px 12px;border-radius:8px;cursor:pointer;font-size:.82rem;" title="Transferir mesa">🔀</button>
        <button onclick="abrirDivisao()" style="background:#2a2a2a;color:#fff;border:none;padding:10px 12px;border-radius:8px;cursor:pointer;font-size:.82rem;">💰 Dividir</button>
        <button onclick="openFecharMesa()" style="background:var(--gn);color:#fff;border:none;padding:10px 12px;border-radius:8px;cursor:pointer;font-weight:700;font-size:.82rem;">🖨️ Fechar</button>
        <button onclick="pedirConta()" style="background:#f4c430;color:#000;border:none;padding:10px 12px;border-radius:8px;cursor:pointer;font-size:.82rem;font-weight:700;">🧾 Conta</button>
      </div>
    </div>
    <!-- NOVA MESA -->
    <div style="border-top:1px solid #222;margin-top:12px;padding-top:12px;">
      <div style="display:flex;gap:7px;">
        <input type="text" id="newCmdNm" placeholder="Nome ou Mesa..." style="flex:1;padding:9px;background:#1e1e1e;border:1px solid #333;border-radius:7px;color:#fff;font-size:.85rem;">
        <button onclick="newCmd()" style="background:var(--gn);border:none;color:#fff;padding:9px 16px;border-radius:7px;cursor:pointer;font-weight:700;">+ Nova</button>
      </div>
    </div>
  </div>

  <!-- GARÇONS -->
  <div id="cmdTabGarcons" style="display:none;">
    <p style="font-size:.79rem;color:#aaa;margin-bottom:11px;">Cadastre os garçons com nome e senha individual.</p>
    <div id="garconsList" style="max-height:250px;overflow-y:auto;margin-bottom:10px;"></div>
    <div style="display:flex;gap:7px;flex-wrap:wrap;">
      <input type="text" id="gNome" placeholder="Nome do garçom" style="flex:1;padding:8px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;font-size:.85rem;">
      <input type="password" id="gSenha" placeholder="Senha" style="width:90px;padding:8px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;font-size:.85rem;">
      <button onclick="addGarcom()" style="background:var(--pr);border:none;color:#fff;padding:8px 13px;border-radius:6px;cursor:pointer;font-weight:700;">+</button>
    </div>
  </div>

  <!-- KDS COZINHA -->
  <div id="cmdTabKds" style="display:none;">
    <p style="font-size:.79rem;color:#aaa;margin-bottom:11px;">Pedidos em tempo real para a cozinha. Coloque um tablet aqui!</p>
    <div id="kdsList" style="max-height:400px;overflow-y:auto;"></div>
  </div>

  <!-- BOTÃO LIMPAR TESTES -->
  <button id="btnLimparTestes" onclick="limparTestes()" style="margin-top:8px;width:100%;padding:10px;background:#ff6600;color:#fff;border:none;border-radius:7px;font-weight:700;cursor:pointer;font-size:.85rem;">🧹 Limpar Testes (apagar todas as mesas)</button>
  <button class="bsc" style="margin-top:8px;" onclick="cls('ovCmd')">Fechar</button>
</div></div>

<!-- CARDÁPIO VISUAL NA COMANDA -->
<div class="ov" id="ovCardapioCmd"><div class="box" style="max-width:600px;padding-bottom:16px;">
  <!-- Banner mesa ativa -->
  <div class="cmd-mesa-banner" style="margin-bottom:14px;">
    <div class="cmb-icon">🪑</div>
    <div class="cmb-info">
      <strong id="cardapioCmdMesa">Mesa —</strong>
      <span>Toque no item para escolher quantidade</span>
    </div>
  </div>
  <!-- Categorias -->
  <div id="cardapioCmdCats" style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:12px;overflow-x:auto;padding-bottom:4px;"></div>
  <!-- Grid produtos -->
  <div id="cardapioCmdGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:8px;max-height:360px;overflow-y:auto;"></div>
  <button class="bsc" style="margin-top:12px;" onclick="cls('ovCardapioCmd')">✖ Fechar</button>
</div></div>

<!-- MODAL DE QUANTIDADE (sobe de baixo) -->
<div class="qty-wrap" id="qtyWrap" onclick="if(event.target===this)fecharQty()">
  <div class="qty-box">
    <div style="text-align:center;">
      <div class="qty-mesa-tag" id="qtyMesaTag">🪑 Mesa —</div>
    </div>
    <div class="qty-prod-row">
      <img id="qtyProdImg" src="" onerror="this.src='https://placehold.co/64x64/1a1a1a/444?text=?'">
      <div class="qpr-info">
        <strong id="qtyProdNome"></strong>
        <div class="qpr-preco" id="qtyProdPreco"></div>
      </div>
    </div>
    <div class="qty-big">
      <button class="qb-minus" onclick="qtyStep(-1)">−</button>
      <span class="qb-n" id="qtyN">1</span>
      <button class="qb-plus" onclick="qtyStep(1)">+</button>
    </div>
    <div class="qty-sub">
      <span>Subtotal</span>
      <strong id="qtySub">R$ 0,00</strong>
    </div>
    <textarea class="qty-obs" id="qtyObs" placeholder="Observação (ex: sem molho, bem passado...)" rows="2"></textarea>
    <button class="qty-confirmar" onclick="confirmarQty()">✅ Adicionar à comanda</button>
    <button class="qty-cancelar" onclick="fecharQty()">Cancelar</button>
  </div>
</div>

<!-- TOAST -->
<div class="cmd-toast" id="cmdToast">✅ <span id="cmdToastTxt"></span></div>

<!-- UPSELL BAR -->
<div class="upsell-bar" id="upsellBar">
  <img id="upsellImg" src="" onerror="this.src='https://placehold.co/44x44/1a1a1a/444?text=?'">
  <div class="upsell-info">
    <strong id="upsellNome"></strong>
    <span id="upsellPreco"></span>
  </div>
  <button class="upsell-btn" id="upsellBtn" onclick="addUpsell()">+ Adicionar</button>
  <button class="upsell-close" onclick="fecharUpsell()">✕</button>
</div>

<!-- DIVISÃO DE CONTA POR PESSOA -->
<div class="ov" id="ovDivisao"><div class="box" style="max-width:540px;padding:18px;">
  <h2>💰 Dividir Conta</h2>
  <!-- Total + não atribuído + progresso -->
  <div style="display:flex;justify-content:space-between;align-items:center;background:#1e1e1e;border-radius:8px;padding:10px 14px;margin-bottom:8px;">
    <div style="text-align:center;flex:1;">
      <div style="font-size:.7rem;color:#888;">Total da mesa</div>
      <div id="divTotGeral" style="font-size:1.1rem;font-weight:800;color:var(--pr);"></div>
    </div>
    <div style="width:1px;background:#333;height:32px;"></div>
    <div style="text-align:center;flex:1;">
      <div style="font-size:.7rem;color:#888;">Ainda a distribuir</div>
      <div id="divNaoAtrib" style="font-size:1.1rem;font-weight:800;color:var(--gd);"></div>
    </div>
    <div style="width:1px;background:#333;height:32px;"></div>
    <div style="text-align:center;flex:1;">
      <div style="font-size:.7rem;color:#888;">Itens</div>
      <div id="divContagem" style="font-size:1.1rem;font-weight:800;color:#aaa;"></div>
    </div>
  </div>
  <!-- Barra de progresso -->
  <div class="div-progress" style="margin-bottom:10px;">
    <div class="div-progress-bar" id="divProgressBar" style="width:0%"></div>
  </div>
  <!-- Adicionar pessoa -->
  <div style="display:flex;gap:7px;margin-bottom:10px;">
    <input type="text" id="divNovaPessoa" placeholder="Nome (ex: João)" style="flex:1;padding:9px 10px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;font-size:.88rem;" onkeydown="if(event.key==='Enter')divAddPessoa()">
    <button onclick="divAddPessoa()" style="background:var(--pr);border:none;color:#fff;padding:9px 16px;border-radius:6px;cursor:pointer;font-weight:700;white-space:nowrap;">+ Pessoa</button>
  </div>
  <!-- Botão dividir igualmente -->
  <button class="div-igual-btn" id="divIgualBtn" onclick="divIgual()" style="display:none;">⚖️ Dividir igualmente entre todas as pessoas</button>
  <!-- Abas de pessoas -->
  <div id="divAbasPessoas" style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:10px;"></div>
  <!-- Itens disponíveis (clica pra atribuir) -->
  <div style="font-size:.75rem;color:#888;margin-bottom:6px;" id="divInstrucao">👆 Selecione uma pessoa acima e clique nos itens abaixo para atribuir</div>
  <div id="divItensPool" style="max-height:260px;overflow-y:auto;background:#111;border-radius:8px;padding:8px;"></div>
  <!-- Botões -->
  <button class="bpr" style="margin-top:12px;" onclick="gerarResumoDiv()">📊 Ver Resumo por Pessoa</button>
  <button class="bsc" style="margin-top:7px;" onclick="fecharDivisao()">Fechar</button>
</div></div>

<!-- TRANSFERIR MESA -->
<div class="ov" id="ovTransfer"><div class="box" style="max-width:460px;">
  <h2>🔀 Transferir Mesa</h2>
  <p style="font-size:.82rem;color:#aaa;margin-bottom:10px;">Mova a comanda de <strong id="transferOrigem" style="color:var(--pr);"></strong> para outra mesa:</p>
  <div class="transfer-grid" id="transferGrid"></div>
  <button class="bsc" onclick="cls('ovTransfer')">Cancelar</button>
</div></div>

<!-- PEDIR DE NOVO (modal status cliente) -->
<div class="ov" id="ovPedirNovo"><div class="box" style="max-width:460px;">
  <h2>🔁 Pedir de Novo</h2>
  <p style="font-size:.82rem;color:#aaa;margin-bottom:12px;">Seus últimos itens pedidos:</p>
  <div id="pedirNovoList" style="margin-bottom:14px;"></div>
  <button class="bpr" onclick="confirmarPedirNovo()">🛒 Adicionar ao carrinho</button>
  <button class="bsc" onclick="cls('ovPedirNovo')">Cancelar</button>
</div></div>

<!-- ADD ITEM -->
<div class="ov" id="ovAddItem"><div class="box" style="max-width:480px;">
  <h2>➕ Adicionar Item</h2>
  <p id="addItemSub" style="color:#888;font-size:.82rem;margin-bottom:13px;"></p>
  <div class="fg"><label>Item</label><select id="aiSel" style="width:100%;padding:9px;background:#1e1e1e;border:1px solid #333;border-radius:7px;color:#fff;"></select></div>
  <div class="fg"><label>Quantidade</label><input type="number" id="aiQty" value="1" min="1" style="width:90px;padding:9px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;"></div>
  <div class="fg"><label>Obs</label><input type="text" id="aiObs" placeholder="..." style="width:100%;padding:9px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;"></div>
  <button class="bpr" onclick="confirmAddItem()">✅ Adicionar</button>
  <button class="bsc" onclick="cls('ovAddItem')">Cancelar</button>
</div></div>

<!-- FECHAR COMANDA -->
<div class="ov" id="ovFechar"><div class="box" style="max-width:460px;">
  <h2>💰 Fechar Comanda</h2>
  <div id="fcMesaNome" style="background:linear-gradient(135deg,#a01020,var(--pr));color:#fff;border-radius:9px;padding:9px 14px;font-weight:800;margin-bottom:12px;font-size:.95rem;"></div>
  <!-- Resumo dos itens -->
  <div style="font-size:.78rem;color:#888;margin-bottom:6px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;">Resumo do pedido</div>
  <div id="fcResumo" style="max-height:220px;overflow-y:auto;margin-bottom:14px;background:#111;border-radius:9px;padding:8px 10px;"></div>
  <!-- Forma de pagamento -->
  <div style="font-size:.78rem;color:#888;margin-bottom:6px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;">Forma de pagamento</div>
  <select id="fcPag" onchange="fcPagChange()" style="width:100%;padding:9px;background:#1e1e1e;border:1px solid #333;border-radius:7px;color:#fff;margin-bottom:10px;">
    <option value="dinheiro">💵 Dinheiro</option>
    <option value="pix">📱 Pix</option>
    <option value="cartao">🏧 Cartão</option>
    <option value="mp">💳 Infinite Pay</option>
  </select>
  <div id="fcMpDiv" style="display:none;">
    <a href="https://checkout.infinitepay.io/sushiyanni/Z3U0DELN67" target="_blank" style="display:block;text-align:center;background:var(--pr);color:#fff;padding:10px;border-radius:8px;font-weight:700;text-decoration:none;margin-bottom:8px;">🔗 Infinite Pay</a>
    <select class="parc-sel" id="fcParc" onchange="calcFcParc()">
      <option value="1">À vista</option><option value="2">2x</option><option value="3">3x</option>
      <option value="4">4x</option><option value="6">6x</option><option value="12">12x</option>
    </select>
    <p class="parc-info" id="fcParcInfo"></p>
  </div>
  <div style="display:flex;justify-content:space-between;align-items:center;background:#1e1e1e;border-radius:9px;padding:12px 14px;margin:10px 0;">
    <span style="font-weight:700;color:#aaa;">TOTAL</span>
    <span id="fcTot" style="color:var(--pr);font-weight:900;font-size:1.4rem;"></span>
  </div>
  <button class="bgn" onclick="confirmarFechamento()">🖨️ Imprimir & Fechar</button>
  <button class="bsc" onclick="cls('ovFechar')">Cancelar</button>
</div></div>

<script type="module">
import{initializeApp}from"https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import{getFirestore,collection,doc,setDoc,getDoc,getDocs,deleteDoc,onSnapshot,addDoc}from"https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const FB={apiKey:"AIzaSyD-Qm_-JIMb5NSdow7RDAcd6PGZLDX0org",authDomain:"yanni-sushi.firebaseapp.com",projectId:"yanni-sushi",storageBucket:"yanni-sushi.firebasestorage.app",messagingSenderId:"683902738779",appId:"1:683902738779:web:9ca1289e376b804d27ba7e"};
const fbApp=initializeApp(FB);
const fdb=getFirestore(fbApp);

function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2,6);}
function fmt(v){return'R$ '+parseFloat(v||0).toFixed(2).replace('.',',');}
const TAXA=0.035;

let produtos=[],balcao=[],comandas=[],vendas=[],pedidos=[],garcons=[];
let cfg={
  fone:'5589981216999',foneCozinha:'5589981216999',
  pass:'y1234',        // Dono — acesso total
  passAdmin:'y1235',   // Admin — só cardápio/fotos/preços
  passGarcom:'4321',  // Garçom geral (legado)
  pix:'89981216999',tempo:30,logo:'',recesso:false,
  taxaEntrega:3.00,   // Taxa delivery — configurável sem código
  whatsappEntregador:'5589981216999', // WhatsApp do entregador
  cats:['Petiscos','Executivos','Carnes','Sushis Tradicionais','Sushis Especiais','Sushis Hot','Sushis Hot Roll','Temaki Cru','Temaki Hot','Bebidas','Refrigerantes','Cervejas','Whisky']
};
let cart=[],payMethod='',editCmdId=null,activeCat='all',filtroPedAtual='todos';
let usuarioLogado=null; // {tipo:'dono'|'admin'|'garcom', nome, senha}

window.cls=id=>document.getElementById(id).style.display='none';
window.opn=id=>document.getElementById(id).style.display='block';
function setSyncStatus(ok){const d=document.getElementById('syncDot');if(d)d.className='sync-dot'+(ok?'':' off');}

const INIT_PROD=[
  {id:'i1',cat:'Sushis Tradicionais',nome:'Hossomaki Salmão',preco:22,desc:'Tradicional',img:'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400',estoque:0},
  {id:'i2',cat:'Sushis Especiais',nome:'Temaki Philadelphia',preco:28,desc:'Com cream cheese',img:'https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400',estoque:0},
  {id:'i3',cat:'Carnes',nome:'Carneiro Assado',preco:48,desc:'Especialidade da casa',img:'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400',estoque:0},
  {id:'i4',cat:'Cervejas',nome:'Heineken Long Neck',preco:12,desc:'330 ml gelada',img:'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=400',estoque:0},
  {id:'i5',cat:'Refrigerantes',nome:'Coca-Cola Lata',preco:6,desc:'350 ml',img:'',estoque:0}
];
const INIT_BALC=[
  {id:'b1',nome:'Cerveja Lata',preco:7},{id:'b2',nome:'Cerveja Long Neck',preco:12},
  {id:'b3',nome:'Refrigerante Lata',preco:6},{id:'b4',nome:'Água s/ Gás',preco:4},
  {id:'b5',nome:'Água c/ Gás',preco:5},{id:'b6',nome:'Suco Natural',preco:10},
  {id:'b7',nome:'Energético',preco:14},{id:'b8',nome:'Água de Coco',preco:8},
  {id:'b9',nome:'Whisky (dose)',preco:18},{id:'b10',nome:'Sushi Balcão — R$2,00',preco:2},
  {id:'b11',nome:'Sushi Balcão — R$2,50',preco:2.5},{id:'b12',nome:'Água Tônica',preco:7}
];

async function initFB(){
  try{
    const cfgDoc=await getDoc(doc(fdb,'config','main'));
    if(cfgDoc.exists())cfg={...cfg,...cfgDoc.data()};
    // Aplica logo salva
    if(cfg.logo){
      const logoImg=document.getElementById('logoImg');
      if(logoImg){logoImg.src=cfg.logo;logoImg.style.display='block';}
    }
    atualizarTempoBanner();
    const bs=await getDocs(collection(fdb,'balcao'));
    if(bs.empty){for(const b of INIT_BALC)await setDoc(doc(fdb,'balcao',b.id),b);balcao=[...INIT_BALC];}
    else balcao=bs.docs.map(d=>({...d.data(),id:d.id}));
    onSnapshot(collection(fdb,'produtos'),snap=>{
      produtos=snap.docs.map(d=>({...d.data(),id:d.id}));
      if(!produtos.length){INIT_PROD.forEach(p=>setDoc(doc(fdb,'produtos',p.id),p));}
      render();setSyncStatus(true);
    });
    onSnapshot(collection(fdb,'comandas'),snap=>{
      comandas=snap.docs.map(d=>({...d.data(),id:d.id}));
      renderMesaGrid();
      if(mesaSelecionada) renderDetalheComanda();
      setSyncStatus(true);
    });
    onSnapshot(collection(fdb,'vendas'),snap=>{vendas=snap.docs.map(d=>({...d.data(),id:d.id}));});
    onSnapshot(collection(fdb,'pedidos'),snap=>{
      pedidos=snap.docs.map(d=>({...d.data(),id:d.id}));
      verificarNovosPedidos();
      renderPedidos();atualizaBadgePed();setSyncStatus(true);
    });
    setSyncStatus(true);
    // Carrega novas funcionalidades
    await carregarCfgPontos();
    await carregarMeta();
    await carregarCupons();
    await carregarPratoDia();
    // Verifica horário ao abrir
    setTimeout(verificarHorario, 1500);
    // Detecta mesa por QR Code
    detectarMesa();
    // Carrega garçons
    loadGarcons();
  }catch(e){console.error(e);setSyncStatus(false);}
}

// ── RENDER MENU ───────────────────────────────────
window.render=function(){
  const wrap=document.getElementById('menuWrap');
  const list=activeCat==='all'?produtos:produtos.filter(p=>p.cat===activeCat);
  const cats=activeCat==='all'?[...new Set(produtos.map(p=>p.cat))]:[activeCat];
  if(!produtos.length){wrap.innerHTML='<p style="text-align:center;color:#555;margin-top:50px;">Carregando...</p>';buildCatBar();return;}
  let html='';
  cats.forEach(cat=>{
    const items=list.filter(p=>p.cat===cat);if(!items.length)return;
    html+=\`<div class="sec-title">\${cat}</div><div class="grid">\`;
    items.forEach(p=>{
      if(p.disponivel===false) return; // esconde produtos indisponíveis
      const img=p.img||'https://placehold.co/400x148/1a1a1a/444?text=Sem+foto';
      const est=p.estoque||0;
      const semEst=est>0&&est===0;
      const baixo=est>0&&est<=5;
      let badge='';
      if(est>0)badge=\`<span class="estoque-badge\${est<=5?' baixo':''}">\${est} restantes</span>\`;
      if(est===0&&p.estoque!==undefined&&p.estoque!==null&&p._estoqueAtivo)badge='<span class="estoque-badge zerado">Esgotado</span>';
      const disabled=p.estoque>0&&p.estoque<1?'disabled':'';
      html+=\`<div class="pcard\${p._estoqueAtivo&&p.estoque<=0&&p.estoque!==undefined?' sem-estoque':''}">
        <button class="btn-del" onclick="delProd('\${p.id}')">✕</button>
        <button class="btn-edt" onclick="editProd('\${p.id}')">✏️</button>
        \${badge}
        <img class="pimg" src="\${img}" onerror="this.src='https://placehold.co/400x148/1a1a1a/444?text=Sem+foto'">
        <div class="pinfo"><div class="pname">\${p.nome}</div><div class="pdesc">\${p.desc||''}</div>
        <div class="pfoot"><span class="ppreco">\${fmt(p.preco)}</span>
        <button class="btn-add" onclick="addCart('\${p.id}')" \${disabled}>+ Pedido</button></div></div>
      </div>\`;
    });html+='</div>';
  });
  wrap.innerHTML=html||'<p style="text-align:center;color:#555;margin-top:30px;">Nenhum item.</p>';
  buildCatBar();
}
function buildCatBar(){
  const cats=[...new Set(produtos.map(p=>p.cat))];
  const bar=document.getElementById('catBar');
  bar.innerHTML=\`<span class="ct\${activeCat==='all'?' on':''}" onclick="setCat('all',this)">Todos</span>\`;
  cats.forEach(c=>{bar.innerHTML+=\`<span class="ct\${activeCat===c?' on':''}" onclick="setCat('\${c.replace(/'/g,"\\\\'")}',this)">\${c}</span>\`;});
}
window.setCat=function(cat,el){activeCat=cat;document.querySelectorAll('.ct').forEach(t=>t.classList.remove('on'));el.classList.add('on');render();}

// ── CART ──────────────────────────────────────────
window.addCart=function(id){
  const p=produtos.find(x=>x.id===id);if(!p)return;
  const ex=cart.find(x=>x.id===id);
  if(ex)ex.qty++;else cart.push({id,nome:p.nome,preco:p.preco,qty:1,cat:p.cat});
  updCartBar();
}
function updCartBar(){
  const cnt=cart.reduce((a,c)=>a+c.qty,0);
  const subtotal=cart.reduce((a,c)=>a+c.preco*c.qty,0);
  const taxa=tipoPedido==='delivery'?3:0;
  const tot=subtotal+taxa;
  document.getElementById('cbarCnt').textContent=cnt;
  document.getElementById('cbarTot').textContent=fmt(tot);
  document.getElementById('cbar').style.display=cnt?'flex':'none';
}
window.openCart=function(){
  renderCartModal();
  // Reseta selecao de pagamento
  payMethod='';
  document.querySelectorAll('.popt').forEach(o=>o.classList.remove('on'));
  document.querySelectorAll('.pdet').forEach(d=>d.style.display='none');
  const btnEnv=document.getElementById('btnEnviarPedido');
  if(btnEnv) btnEnv.style.display='none';
  const comproMp=document.getElementById('comproMpBox');
  if(comproMp) comproMp.style.display='none';
  if(mesaAtual){
    document.getElementById('mesaBox').style.display='block';
    document.getElementById('mesaCliente').value=mesaAtual;
  }
  // Mostra aviso delivery
  const avisoEl = document.getElementById('avisoDelivery');
  if (avisoEl) avisoEl.style.display = 'flex';
  // Mostra pontos
  const foneEl = document.getElementById('foneCliente');
  const nomeEl = document.getElementById('nomeCliente');
  if(foneEl && nomeEl){
    const fone=foneEl.value.trim().replace(/\D/g,'');
    const nome=nomeEl.value.trim();
    if(fone && nome) mostrarPontosCarrinho(fone, nome);
  }
  // Reseta cupom
  cupomAplicado = null;
  const cupomMsg = document.getElementById('cupomMsg');
  if (cupomMsg) cupomMsg.innerHTML = '';
  const cupomInput = document.getElementById('cupomInput');
  if (cupomInput) cupomInput.value = '';
  // Suki inteligente - dispara ANTES de abrir o carrinho
  if(cart.length>0){
    try{
      var itens=cart.map(function(i){return i.qty+'x '+i.nome;}).join(', ');
      var disp=produtos.filter(function(p){return p.disponivel!==false&&!cart.find(function(c){return c.id===p.id;});});
      if(disp.length>0){
        var ops=disp.map(function(p){return 'ID:'+p.id+' '+p.nome+' R$'+p.preco;}).join('|');
        fetch('/suki',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({carrinho:itens,opcoes:ops})})
        .then(function(r){return r.json();})
        .then(function(d){
          var alvo=disp.find(function(p){return p.id===(d.id||'').trim();})||disp[Math.floor(Math.random()*disp.length)];
          _upsellProd=alvo;
          document.getElementById('upsellImg').src=alvo.img||'https://placehold.co/44x44/1a1a1a/444?text=?';
          document.getElementById('upsellNome').textContent=alvo.nome;
          document.getElementById('upsellPreco').textContent='Adicionar por '+fmt(alvo.preco)+'?';
          var bar=document.getElementById('upsellBar');
          bar.classList.add('show');
          if(_upsellTimer)clearTimeout(_upsellTimer);
          _upsellTimer=setTimeout(fecharUpsell,8000);
        }).catch(function(){mostrarUpsell(cart[cart.length-1].id);});
      }
    }catch(e){}
  }
  opn('ovCart');
}
function renderCartModal(){
  const el=document.getElementById('cartList');
  if(!cart.length){el.innerHTML='<p style="color:#555;text-align:center;padding:18px;">Carrinho vazio.</p>';document.getElementById('cartTotModal').textContent=fmt(0);return;}
  const taxa=tipoPedido==='delivery'?(cfg.taxaEntrega||3):0;
  const subtotal=cart.reduce((a,c)=>a+c.preco*c.qty,0);
  let desconto=0;
  if(cupomAplicado) desconto=Math.round(subtotal*cupomAplicado.desconto/100*100)/100;
  const tot=subtotal+taxa-desconto;
  el.innerHTML=cart.map(it=>\`<div class="cir"><div class="cin">\${it.nome}</div><div class="qc"><button onclick="cQty('\${it.id}',-1)">−</button><span>\${it.qty}</span><button onclick="cQty('\${it.id}',1)">+</button></div><div class="cip">\${fmt(it.preco*it.qty)}</div></div>\`).join('');
  if(taxa>0) el.innerHTML+=\`<div class="cir"><div class="cin" style="color:#888;">🛵 Taxa de entrega</div><div class="cip">\${fmt(taxa)}</div></div>\`;
  if(desconto>0) el.innerHTML+=\`<div class="cir"><div class="cin" style="color:#6db46d;">🎟️ Desconto (\${cupomAplicado.desconto}%)</div><div class="cip" style="color:#6db46d;">-\${fmt(desconto)}</div></div>\`;
  document.getElementById('cartTotModal').textContent=fmt(tot);
}
window.cQty=function(id,d){const i=cart.findIndex(x=>x.id===id);if(i<0)return;cart[i].qty+=d;if(cart[i].qty<=0)cart.splice(i,1);renderCartModal();updCartBar();}
window.selPay=function(m){
  payMethod=m;
  document.querySelectorAll('.popt').forEach(o=>o.classList.remove('on'));
  document.querySelectorAll('.pdet').forEach(d=>d.style.display='none');
  document.getElementById('popt-'+m).classList.add('on');
  if(document.getElementById('det-'+m)) document.getElementById('det-'+m).style.display='block';
  // Pix: atualiza chave e gera QR Code
  if(m==='pix'){
    const chave=cfg.pix||'89981216999';
    document.getElementById('pixChaveShow').textContent=chave+' 📋';
    const subtotal=cart.reduce((a,c)=>a+c.preco*c.qty,0);
    const taxa=tipoPedido==='delivery'?(cfg.taxaEntrega||3):0;
    const total=(subtotal+taxa).toFixed(2);
    // QR Code via API pública (sem chave)
    const qrData=encodeURIComponent(\`PIX:\${chave}:\${total}\`);
    document.getElementById('pixQrImg').src=\`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=\${qrData}\`;
  }
  if(m==='mp') calcParc();
  // Mostrar/ocultar botão enviar principal
  const btnEnv=document.getElementById('btnEnviarPedido');
  if(m==='mp'||m==='pix'){
    btnEnv.style.display='none'; // Para esses casos, usa o fluxo de comprovante
  } else {
    btnEnv.style.display='block';
    btnEnv.textContent='📲 Enviar Pedido via WhatsApp';
  }
}
window.calcParc=function(){const p=parseInt(document.getElementById('parcSel').value)||1,tot=cart.reduce((a,c)=>a+c.preco*c.qty,0),inf=document.getElementById('parcInfo');if(p<=1){inf.textContent='';return;}const tJ=tot*Math.pow(1+TAXA,p);inf.textContent=\`\${p}x de \${fmt(tJ/p)} = total \${fmt(tJ)}\`;}

// ══════════════════════════════════════════════════════
// WEBHOOK_URL do seu Worker no Cloudflare
// Troque pela URL real depois de publicar o Worker!
// ══════════════════════════════════════════════════════
const WEBHOOK_WORKER_URL = 'https://yanni-webhook.SEU-USUARIO.workers.dev';

// ── Variável global para o pedido aguardando pagamento ──
let pedidoAguardandoId = null;
let pollingInterval = null;

// ── selPay atualizado ──
window.selPay=function(m){
  payMethod=m;
  document.querySelectorAll('.popt').forEach(o=>o.classList.remove('on'));
  document.querySelectorAll('.pdet').forEach(d=>d.style.display='none');
  document.getElementById('popt-'+m).classList.add('on');
  if(document.getElementById('det-'+m)) document.getElementById('det-'+m).style.display='block';
  // Pix: atualiza chave e gera QR Code
  if(m==='pix'){
    const chave=cfg.pix||'89981216999';
    document.getElementById('pixChaveShow').textContent=chave+' 📋';
    const subtotal=cart.reduce((a,c)=>a+c.preco*c.qty,0);
    const taxa=tipoPedido==='delivery'?(cfg.taxaEntrega||3):0;
    const total=(subtotal+taxa).toFixed(2);
    const qrData=encodeURIComponent(\`PIX:\${chave}:\${total}\`);
    document.getElementById('pixQrImg').src=\`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=\${qrData}\`;
  }
  if(m==='mp') calcParc();
  const btnEnv=document.getElementById('btnEnviarPedido');
  if(m==='mp'||m==='pix'){
    btnEnv.style.display='none';
  } else {
    btnEnv.style.display='block';
    btnEnv.textContent='📲 Enviar Pedido via WhatsApp';
  }
  // Reseta boxes de confirmação
  ['aguardandoPagBox','pagConfirmadoBox','aguardandoPixBox','pixConfirmadoBox'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.style.display='none';
  });
}

window.calcParc=function(){const p=parseInt(document.getElementById('parcSel').value)||1,tot=cart.reduce((a,c)=>a+c.preco*c.qty,0),inf=document.getElementById('parcInfo');if(p<=1){inf.textContent='';return;}const tJ=tot*Math.pow(1+TAXA,p);inf.textContent=\`\${p}x de \${fmt(tJ/p)} = total \${fmt(tJ)}\`;}

// ── Valida formulário antes de prosseguir ──
function validarForm(){
  const nome=document.getElementById('nomeCliente').value.trim();
  const end=tipoPedido==='delivery'?document.getElementById('endCliente').value.trim():'';
  if(!nome){alert('Por favor informe seu nome!');return false;}
  if(tipoPedido==='delivery'&&!end){alert('Por favor informe o endereço de entrega!');return false;}
  if(!cart.length){alert('Carrinho vazio!');return false;}
  return true;
}

// ── Registra pedido no Firebase e abre InfinitePay ──
window.registrarEPagar=async function(){
  if(!validarForm()) return;
  const btn=document.getElementById('btnRegistrarPagarMp');
  btn.disabled=true; btn.textContent='⏳ Registrando...';
  try{
    const pedId=await salvarPedidoFirebase('mp');
    pedidoAguardandoId=pedId;
    // Mostra box de aguardo
    document.getElementById('btnRegistrarPagarMp').style.display='none';
    document.getElementById('aguardandoPagBox').style.display='block';
    document.getElementById('pedIdShow').textContent=pedId;
    // Abre InfinitePay em nova aba
    window.open(\`https://checkout.infinitepay.io/sushiyanni/Z3U0DELN67?ref=\${pedId}\`,'_blank');
    // Inicia polling para detectar confirmação
    iniciarPolling(pedId, 'mp');
  }catch(e){
    console.error(e);
    alert('Erro ao registrar pedido. Tente novamente.');
    btn.disabled=false; btn.textContent='💳 Registrar Pedido e Pagar';
  }
}

// ── Registra pedido no Firebase e aguarda Pix ──
window.registrarEAguardarPix=async function(){
  if(!validarForm()) return;
  const btn=document.getElementById('btnRegistrarPagarPix');
  btn.disabled=true; btn.textContent='⏳ Registrando...';
  try{
    const pedId=await salvarPedidoFirebase('pix');
    pedidoAguardandoId=pedId;
    // Mostra box de aguardo
    document.getElementById('btnRegistrarPagarPix').style.display='none';
    document.getElementById('aguardandoPixBox').style.display='block';
    // Inicia polling para detectar confirmação
    iniciarPolling(pedId, 'pix');
  }catch(e){
    console.error(e);
    alert('Erro ao registrar pedido. Tente novamente.');
    btn.disabled=false; btn.textContent='📱 Registrar Pedido e Aguardar Pix';
  }
}

// ── Salva pedido no Firebase com status aguardando_pagamento ──
async function salvarPedidoFirebase(tipoPag){
  const nome=document.getElementById('nomeCliente').value.trim();
  const fone=document.getElementById('foneCliente').value.trim().replace(/\\D/g,'');
  const obs=document.getElementById('obsCliente').value.trim();
  const end=tipoPedido==='delivery'?document.getElementById('endCliente').value.trim():'';
  const mesa=document.getElementById('mesaCliente')?document.getElementById('mesaCliente').value.trim():'';
  const subtotal=cart.reduce((a,c)=>a+c.preco*c.qty,0);
  const taxa=tipoPedido==='delivery'?(cfg.taxaEntrega||3):0;
  const tot=subtotal+taxa;
  const pc=parseInt(document.getElementById('parcSel')?document.getElementById('parcSel').value:1)||1;
  const labPag={'mp':'💳 Infinite Pay','pix':'📱 Pix'};
  const numPed=await getProxNumPedido();
  const pedId=uid();
  const ped={
    id:pedId, num:numPed,
    cliente:nome, fone, end, tipo:tipoPedido, mesa,
    itens:cart.map(i=>({nome:i.nome,preco:i.preco,qty:i.qty,cat:i.cat})),
    subtotal, taxa, total:tot, obs,
    parcelas:pc,
    pay:\`\${labPag[tipoPag]||tipoPag} (aguardando pagamento)\`,
    status:'aguardando_pagamento',
    criadoEm:new Date().toISOString(),
    criadoEmFmt:new Date().toLocaleString('pt-BR')
  };
  await setDoc(doc(fdb,'pedidos',pedId),ped);
  // Se veio por QR Code de mesa, adiciona na comanda
  if(mesaAtual){
    try{
      const snap=await getDocs(collection(fdb,'comandas'));
      const cmdMesa=snap.docs.find(d=>d.data().nome===mesaAtual&&d.data().aberta);
      if(cmdMesa){
        const c={...cmdMesa.data()};
        cart.forEach(i=>c.itens.push({id:uid(),nome:i.nome,preco:i.preco,qty:i.qty,cat:i.cat,obs:''}));
        await setDoc(doc(fdb,'comandas',cmdMesa.id),c);
      }
    }catch(e){console.error(e);}
  }
  return pedId;
}

// ── Polling: verifica no Firebase se o pedido foi confirmado ──
function iniciarPolling(pedId, tipo){
  if(pollingInterval) clearInterval(pollingInterval);
  let tentativas=0;
  const maxTentativas=120; // ~10 minutos checando a cada 5s
  pollingInterval=setInterval(async()=>{
    tentativas++;
    if(tentativas>maxTentativas){
      clearInterval(pollingInterval);
      return;
    }
    try{
      const snap=await getDoc(doc(fdb,'pedidos',pedId));
      if(snap.exists()){
        const data=snap.data();
        if(data.status==='pago'||data.status==='confirmado'||data.statusPagamento==='aprovado'){
          clearInterval(pollingInterval);
          mostrarPagamentoConfirmado(tipo);
        }
      }
    }catch(e){console.error('polling error:',e);}
  },5000); // checa a cada 5 segundos
}

// ── Mostra tela de sucesso e limpa carrinho ──
function mostrarPagamentoConfirmado(tipo){
  if(tipo==='mp'){
    document.getElementById('aguardandoPagBox').style.display='none';
    document.getElementById('pagConfirmadoBox').style.display='block';
  } else {
    document.getElementById('aguardandoPixBox').style.display='none';
    document.getElementById('pixConfirmadoBox').style.display='block';
  }
  // Adiciona pontos ao cliente
  const _foneP = document.getElementById('foneCliente')?.value?.trim()?.replace(/\\D/g,'');
  const _nomeP = document.getElementById('nomeCliente')?.value?.trim();
  if (_foneP && _nomeP) {
    const subtotalPed = cart.reduce((a,c)=>a+c.preco*c.qty,0);
    const taxaPed = tipoPedido==='delivery'?(cfg.taxaEntrega||3):0;
    const totalPed = subtotalPed + taxaPed;
    adicionarPontos(_foneP, _nomeP, totalPed);
  }
  // Limpa carrinho
  cart=[];tipoPedido='retirada';payMethod='';
  cupomAplicado=null;
  updCartBar();
  document.getElementById('obsCliente').value='';
  document.getElementById('nomeCliente').value='';
  document.getElementById('foneCliente').value='';
  if(document.getElementById('endCliente'))document.getElementById('endCliente').value='';
  // Fecha carrinho após 3 segundos
  setTimeout(()=>{
    cls('ovCart');
    // Reseta botões para próximo pedido
    const btnMp=document.getElementById('btnRegistrarPagarMp');
    if(btnMp){btnMp.style.display='block';btnMp.disabled=false;btnMp.textContent='💳 Registrar Pedido e Pagar';}
    const btnPix=document.getElementById('btnRegistrarPagarPix');
    if(btnPix){btnPix.style.display='block';btnPix.disabled=false;btnPix.textContent='📱 Registrar Pedido e Aguardar Pix';}
  },3000);
  // Status na mesa se veio por QR Code
  if(mesaAtual){
    document.getElementById('statusMesaTxt').textContent='✅ Pagamento confirmado! Pedido em preparo...';
    document.getElementById('ovStatusMesa').style.display='block';
  }
}

// ── QR CODE MESA ──────────────────────────────────
let mesaAtual='';
let ultimaChamada=0;
function detectarMesa(){
  const params=new URLSearchParams(window.location.search);
  const mesa=params.get('mesa');
  if(mesa){
    mesaAtual=\`Mesa \${mesa}\`;
    // Mostra banner da mesa
    const banner=document.createElement('div');
    banner.style.cssText='position:fixed;top:60px;left:50%;transform:translateX(-50%);background:var(--pr);color:#fff;padding:7px 18px;border-radius:20px;font-weight:700;font-size:.85rem;z-index:998;box-shadow:0 2px 12px rgba(230,57,70,.5);';
    banner.textContent=\`🪑 \${mesaAtual}\`;
    document.body.appendChild(banner);
    // Mostra botão chamar garçom
    document.getElementById('btnChamarGarcom').style.display='block';
    // Cria comanda automaticamente se não existir
    criarComandaMesaAuto(mesa);
    // Escuta status do pedido em tempo real
    escutarStatusMesaComPush(mesa);
  }
}

async function criarComandaMesaAuto(numMesa){
  try{
    // Verifica se já existe comanda aberta para essa mesa
    const snap=await getDocs(collection(fdb,'comandas'));
    const jaExiste=snap.docs.some(d=>{
      const c=d.data();
      return c.nome===\`Mesa \${numMesa}\`&&c.aberta;
    });
    if(!jaExiste){
      // Cria comanda automática
      const c={id:uid(),nome:\`Mesa \${numMesa}\`,itens:[],aberta:true,criadaEm:new Date().toLocaleString('pt-BR'),autoQR:true};
      await setDoc(doc(fdb,'comandas',c.id),c);
    }
  }catch(e){console.error(e);}
}

function escutarStatusMesa(numMesa){
  // Escuta pedidos dessa mesa em tempo real
  onSnapshot(collection(fdb,'pedidos'),snap=>{
    const pedsMesa=snap.docs.map(d=>d.data()).filter(p=>p.cliente&&p.cliente.includes&&(p.mesa===\`Mesa \${numMesa}\`||p.cliente===\`Mesa \${numMesa}\`));
    if(pedsMesa.length){
      const ultimo=pedsMesa.sort((a,b)=>b.criadoEm>a.criadoEm?1:-1)[0];
      const statusTxt={
        'novo':'📋 Pedido recebido!',
        'confirmado':'✅ Pedido confirmado!',
        'preparo':'🍳 Sendo preparado...',
        'entrega':'🛵 A caminho!',
        'retirada':'🏪 Pronto para retirar!',
        'entregue':'✅ Pedido entregue!'
      };
      const txt=statusTxt[ultimo.status]||'📋 Pedido enviado!';
      document.getElementById('statusMesaTxt').textContent=txt;
      document.getElementById('ovStatusMesa').style.display='block';
    }
  });
}

window.chamarGarcom=async function(){
  const agora=Date.now();
  if(agora-ultimaChamada<30000){
    alert('Aguarde 30 segundos para chamar novamente!');return;
  }
  ultimaChamada=agora;
  // Salva chamada no Firebase
  await setDoc(doc(fdb,'chamadas',uid()),{
    mesa:mesaAtual,
    criadoEm:new Date().toISOString(),
    atendida:false
  });
  alert(\`✅ Garçom chamado! Aguarde um momento 🙏\`);
}

// Escuta chamadas (para garçom)
function escutarChamadas(){
  onSnapshot(collection(fdb,'chamadas'),snap=>{
    snap.docChanges().forEach(change=>{
      if(change.type==='added'){
        const c=change.doc.data();
        if(!c.atendida){
          // Toca bip do garçom
          tocarBipGarcom();
          // Mostra aviso
          mostrarAvisoChamada(c.mesa,change.doc.id);
        }
      }
    });
  });
}

function tocarBipGarcom(){
  try{
    const ctx=new(window.AudioContext||window.webkitAudioContext)();
    // Som longo e diferente do bip de pedido
    [0,300,600].forEach(t=>{
      const osc=ctx.createOscillator();
      const gain=ctx.createGain();
      osc.connect(gain);gain.connect(ctx.destination);
      osc.frequency.value=660;gain.gain.value=0.4;
      osc.start(ctx.currentTime+t/1000);
      osc.stop(ctx.currentTime+t/1000+0.25);
    });
  }catch(e){}
}

function mostrarAvisoChamada(mesa,docId){
  // Remove aviso anterior se existir
  const anterior=document.getElementById('avisoChamada');
  if(anterior)anterior.remove();
  const div=document.createElement('div');
  div.id='avisoChamada';
  div.style.cssText='position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#141414;border:2px solid var(--gd);border-radius:12px;padding:22px;text-align:center;z-index:9999;box-shadow:0 4px 30px rgba(0,0,0,.8);min-width:260px;';
  div.innerHTML=\`
    <div style="font-size:2rem;margin-bottom:8px;">🔔</div>
    <div style="font-weight:700;font-size:1.1rem;color:var(--gd);margin-bottom:6px;">\${mesa} está chamando!</div>
    <div style="font-size:.82rem;color:#aaa;margin-bottom:14px;">Vá até a mesa atender o cliente</div>
    <button onclick="atenderChamada('\${docId}')" style="background:var(--gn);color:#fff;border:none;padding:10px 20px;border-radius:7px;font-weight:700;cursor:pointer;width:100%;">✅ Estou indo!</button>
  \`;
  document.body.appendChild(div);
}

window.atenderChamada=async function(docId){
  await setDoc(doc(fdb,'chamadas',docId),{atendida:true},{ merge:true});
  const div=document.getElementById('avisoChamada');
  if(div)div.remove();
}

// ── HORÁRIOS ──────────────────────────────────────
const HORARIOS = {
  0: [{i:17,f:23}],          // Dom
  1: [{i:9,f:13.5},{i:17,f:23}], // Seg
  2: [{i:9,f:13.5},{i:17,f:23}], // Ter
  3: [],                     // Qua - fechado
  4: [{i:9,f:13.5},{i:17,f:23}], // Qui
  5: [{i:9,f:13.5},{i:17,f:23}], // Sex
  6: [{i:17,f:23}]           // Sáb
};
const DIAS_NOME=['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];

function estaAberto(){
  if(cfg.recesso) return false;
  const agora=new Date();
  const dia=agora.getDay();
  const hora=agora.getHours()+(agora.getMinutes()/60);
  const turnos=HORARIOS[dia]||[];
  return turnos.some(t=>hora>=t.i&&hora<t.f);
}

function proximoHorario(){
  const agora=new Date();
  const dia=agora.getDay();
  // Verifica próximos 7 dias
  for(let d=0;d<7;d++){
    const diaCheck=(dia+d)%7;
    const turnos=HORARIOS[diaCheck]||[];
    const hora=d===0?agora.getHours()+(agora.getMinutes()/60):0;
    for(const t of turnos){
      if(t.i>hora||d>0){
        const h=Math.floor(t.i);
        const m=t.i%1===0.5?'30':'00';
        if(d===0) return \`hoje às \${h}h\${m}\`;
        if(d===1) return \`amanhã às \${h}h\${m}\`;
        return \`\${DIAS_NOME[diaCheck]} às \${h}h\${m}\`;
      }
    }
  }
  return 'em breve';
}

function verificarHorario(){
  const aberto=estaAberto();
  const agora=new Date();
  const quarta=agora.getDay()===3;
  if(!aberto){
    const titulo=document.getElementById('fechadoTitulo');
    const msg=document.getElementById('fechadoMsg');
    const wpp=document.getElementById('wppAtendente');
    if(cfg.recesso){
      titulo.textContent='Estamos em recesso! 🎌';
      msg.textContent='Voltamos em breve. Você pode fazer uma encomenda ou falar com nosso atendente.';
    } else if(quarta){
      titulo.textContent='Fechado às quartas! 🍣';
      msg.textContent='Estamos fechados às quartas, mas aceitamos encomendas de sushi com antecedência. Entre em contato!';
    } else {
      titulo.textContent='Estamos fechados agora 🕐';
      msg.textContent=\`Abrimos \${proximoHorario()}. Você pode fazer uma encomenda ou falar com nosso atendente.\`;
    }
    wpp.href=\`https://wa.me/\${cfg.fone}?text=\${encodeURIComponent('Olá! Quero fazer uma encomenda/consulta 🍣')}\`;
    document.getElementById('ovFechado').style.display='block';
  }
}

// ── RECESSO ───────────────────────────────────────
window.toggleRecesso=async function(){
  cfg.recesso=!cfg.recesso;
  await setDoc(doc(fdb,'config','main'),cfg);
  atualizaBtnRecesso();
}
function atualizaBtnRecesso(){
  const st=document.getElementById('recessoStatus');
  const btn=document.getElementById('btnRecesso');
  if(!st||!btn)return;
  if(cfg.recesso){
    st.textContent='● Recesso ativado';st.style.color='#ff6666';
    btn.textContent='Desativar Recesso';btn.style.background='#1a3a1a';btn.style.color='#6db46d';
  } else {
    st.textContent='● Restaurante aberto';st.style.color='var(--gn)';
    btn.textContent='Ativar Recesso';btn.style.background='#2a1a1a';btn.style.color='#ff6666';
  }
}

// ── TIPO PEDIDO ───────────────────────────────────
let tipoPedido='retirada';
window.selTipo=function(tipo){
  tipoPedido=tipo;
  const del=document.getElementById('tipoDel');
  const ret=document.getElementById('tipoRet');
  const end=document.getElementById('enderecoBox');
  if(tipo==='delivery'){
    del.style.borderColor='var(--pr)';ret.style.borderColor='#333';
    end.style.display='block';
  } else {
    ret.style.borderColor='var(--pr)';del.style.borderColor='#333';
    end.style.display='none';
  }
  updCartBar();
  renderCartModal();
  // Atualiza QR Code e total do Pix se estiver selecionado
  if(payMethod==='pix'){
    const chave=cfg.pix||'89981216999';
    const subtotal=cart.reduce((a,c)=>a+c.preco*c.qty,0);
    const taxa=tipo==='delivery'?(cfg.taxaEntrega||3):0;
    const total=(subtotal+taxa).toFixed(2);
    const qrData=encodeURIComponent(\`PIX:\${chave}:\${total}\`);
    const qrImg=document.getElementById('pixQrImg');
    if(qrImg) qrImg.src=\`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=\${qrData}\`;
  }
}

// ── COPIAR PIX ────────────────────────────────────
window.copiarPix=function(){
  const chave=cfg.pix||'89981216999';
  navigator.clipboard.writeText(chave).then(()=>{
    const el=document.getElementById('pixChaveShow');
    el.textContent=chave+' ✅ Copiado!';
    setTimeout(()=>el.textContent=chave+' 📋',2000);
  });
}

// ── ENCOMENDA ─────────────────────────────────────
window.abrirEncomenda=function(){cls('ovFechado');opn('ovEncomenda');}
window.enviarEncomenda=async function(){
  const nome=document.getElementById('encNome').value.trim();
  const fone=document.getElementById('encFone').value.trim();
  const data=document.getElementById('encData').value;
  const pedido=document.getElementById('encPedido').value.trim();
  const tipo=document.getElementById('encTipo').value;
  if(!nome){alert('Informe seu nome!');return;}
  if(!fone){alert('Informe seu WhatsApp!');return;}
  if(!pedido){alert('Descreva o que deseja encomendar!');return;}
  let msg=\`🍣 *Encomenda — Yanni Sushi*\\n\\n\`;
  msg+=\`👤 Nome: \${nome}\\n📱 WhatsApp: \${fone}\\n\`;
  if(data)msg+=\`📅 Data desejada: \${new Date(data).toLocaleString('pt-BR')}\\n\`;
  msg+=\`📍 \${tipo==='delivery'?'Entrega em Alegrete PI':'Retirada no restaurante'}\\n\\n\`;
  msg+=\`📝 Pedido:\\n\${pedido}\`;
  window.open(\`https://wa.me/\${cfg.fone}?text=\${encodeURIComponent(msg)}\`,'_blank');
  cls('ovEncomenda');
}

// ── PEDIDO NÚMERO ─────────────────────────────────
async function getProxNumPedido(){
  try{
    const d=await getDoc(doc(fdb,'config','pedido_counter'));
    const n=(d.exists()?d.data().n:0)+1;
    await setDoc(doc(fdb,'config','pedido_counter'),{n});
    return n;
  }catch(e){return Math.floor(Math.random()*9000)+1000;}
}

// ── BIP SONORO ────────────────────────────────────
function tocarBip(){
  try{
    const ctx=new(window.AudioContext||window.webkitAudioContext)();
    const osc=ctx.createOscillator();
    const gain=ctx.createGain();
    osc.connect(gain);gain.connect(ctx.destination);
    osc.frequency.value=880;gain.gain.value=0.3;
    osc.start();osc.stop(ctx.currentTime+0.15);
    setTimeout(()=>{
      const o2=ctx.createOscillator();const g2=ctx.createGain();
      o2.connect(g2);g2.connect(ctx.destination);
      o2.frequency.value=1100;g2.gain.value=0.3;
      o2.start(ctx.currentTime);o2.stop(ctx.currentTime+0.15);
    },200);
  }catch(e){}
}

let ultimosPedidos=new Set();
function verificarNovosPedidos(){
  const novos=pedidos.filter(p=>p.status==='novo'&&!ultimosPedidos.has(p.id));
  if(novos.length>0&&ultimosPedidos.size>0){
    tocarBip();
    novos.forEach(p=>ultimosPedidos.add(p.id));
  } else {
    pedidos.forEach(p=>ultimosPedidos.add(p.id));
  }
}

window.enviarWpp=async function(foraHorario=false){
  if(!cart.length){alert('Carrinho vazio!');return;}
  const nome=document.getElementById('nomeCliente').value.trim();
  const fone=document.getElementById('foneCliente').value.trim().replace(/\\D/g,'');
  const obs=document.getElementById('obsCliente').value.trim();
  const end=tipoPedido==='delivery'?document.getElementById('endCliente').value.trim():'';
  const pay=payMethod||'não informado';
  if(!nome){alert('Por favor informe seu nome!');return;}
  if(tipoPedido==='delivery'&&!end){alert('Por favor informe o endereço de entrega!');return;}
  // Taxa de entrega só se for delivery
  const taxa=tipoPedido==='delivery'?(cfg.taxaEntrega||3):0;
  const subtotal=cart.reduce((a,c)=>a+c.preco*c.qty,0);
  const tot=subtotal+taxa;
  const mesa=document.getElementById('mesaCliente')?document.getElementById('mesaCliente').value.trim():'';
  if(!foraHorario&&!estaAberto()&&!cfg.recesso){
    if(!confirm(\`⚠️ Estamos fechados no momento!\\n\\nSeu pedido será enviado, mas você precisará falar com o atendente para confirmar.\\n\\nDeseja continuar?\`))return;
    foraHorario=true;
  }
  const numPed=await getProxNumPedido();
  let msg=\`🍣 *Pedido #\${String(numPed).padStart(4,'0')} — Yanni Sushi*\\n\\n\`;
  if(foraHorario)msg+=\`⚠️ *PEDIDO FORA DO HORÁRIO*\\n\\n\`;
  msg+=\`👤 Cliente: \${nome}\\n\`;
  if(mesa)msg+=\`🪑 \${mesa}\\n\`;
  if(fone)msg+=\`📱 WhatsApp: \${fone}\\n\`;
  msg+=\`📍 \${tipoPedido==='delivery'?\`Delivery — \${end}\`:'Retirada no restaurante'}\\n\\n\`;
  msg+=\`📋 *Itens:*\\n\`;
  cart.forEach(i=>{msg+=\`• \${i.qty}x \${i.nome} — \${fmt(i.preco*i.qty)}\\n\`;});
  msg+=\`\\n💰 Subtotal: \${fmt(subtotal)}\`;
  if(taxa>0)msg+=\`\\n🛵 Taxa de entrega: \${fmt(taxa)}\`;
  msg+=\`\\n*TOTAL: \${fmt(tot)}*\`;
  if(obs)msg+=\`\\n\\n💬 Obs: \${obs}\`;
  const pm={'din':'💵 Dinheiro na entrega','cart':'🏧 Cartão na entrega'};
  msg+=\`\\n\${pm[pay]||pay}\`;
  const ped={
    id:uid(),num:numPed,
    cliente:nome,fone,end,tipo:tipoPedido,mesa,
    itens:cart.map(i=>({nome:i.nome,preco:i.preco,qty:i.qty,cat:i.cat})),
    subtotal,taxa,total:tot,obs,pay:pm[pay]||pay,
    status:'novo',foraHorario,
    criadoEm:new Date().toISOString(),
    criadoEmFmt:new Date().toLocaleString('pt-BR')
  };
  await setDoc(doc(fdb,'pedidos',ped.id),ped);
  if(mesaAtual){
    try{
      const snap=await getDocs(collection(fdb,'comandas'));
      const cmdMesa=snap.docs.find(d=>d.data().nome===mesaAtual&&d.data().aberta);
      if(cmdMesa){
        const c={...cmdMesa.data()};
        cart.forEach(i=>c.itens.push({id:uid(),nome:i.nome,preco:i.preco,qty:i.qty,cat:i.cat,obs:''}));
        await setDoc(doc(fdb,'comandas',cmdMesa.id),c);
      }
    }catch(e){console.error(e);}
  }
  await registrarVenda(cart,'whatsapp');
  window.open(\`https://wa.me/\${cfg.fone}?text=\${encodeURIComponent(msg)}\`,'_blank');
  if(mesaAtual){
    document.getElementById('statusMesaTxt').textContent='📋 Pedido recebido!';
    document.getElementById('ovStatusMesa').style.display='block';
  }
  if(foraHorario&&fone){
    const msgAt=\`Olá! Fiz um pedido no site mas estão fechados agora. Vocês conseguem atender? 🍣\`;
    setTimeout(()=>window.open(\`https://wa.me/\${cfg.fone}?text=\${encodeURIComponent(msgAt)}\`,'_blank'),1500);
  }
  cart=[];tipoPedido='retirada';payMethod='';
  updCartBar();cls('ovCart');
  document.getElementById('obsCliente').value='';
  document.getElementById('nomeCliente').value='';
  document.getElementById('foneCliente').value='';
  if(document.getElementById('endCliente'))document.getElementById('endCliente').value='';
}

// ── PEDIDOS ───────────────────────────────────────
function atualizaBadgePed(){
  const novos=pedidos.filter(p=>p.status==='novo').length;
  const badge=document.getElementById('pedBadge');
  if(badge){badge.textContent=novos;badge.style.display=novos?'inline':'none';}
}

window.openPedidos=function(){filtroPedAtual='todos';renderPedidos();opn('ovPedidos');}

window.filtroPed=function(f,btn){
  filtroPedAtual=f;
  document.querySelectorAll('#ovPedidos .bst').forEach(b=>b.style.opacity='.5');
  if(btn)btn.style.opacity='1';
  renderPedidos();
}

const STATUS_INFO={
  aguardando_pagamento:{label:'⏳ Aguardando Pagamento',cls:'st-novo',cor:'#f4c430'},pago:{label:'💰 Pago (confirmar)',cls:'st-conf',cor:'#6db46d'},
  novo:{label:'🔵 Novo',cls:'st-novo'},
  confirmado:{label:'✅ Confirmado',cls:'st-confirmado'},
  preparo:{label:'🍳 Em preparo',cls:'st-preparo'},
  entrega:{label:'🛵 Saiu p/ entrega',cls:'st-entrega'},
  retirada:{label:'🏪 Pronto p/ retirar',cls:'st-retirada'},
  entregue:{label:'✅ Entregue',cls:'st-entregue'}
};

function renderPedidos(){
  const el=document.getElementById('pedList');if(!el)return;
  let lista=[...pedidos].sort((a,b)=>b.criadoEm>a.criadoEm?1:-1);
  if(filtroPedAtual!=='todos')lista=lista.filter(p=>p.status===filtroPedAtual);
  if(!lista.length){el.innerHTML='<p style="color:#555;text-align:center;padding:20px;">Nenhum pedido.</p>';return;}
  el.innerHTML=lista.map(p=>{
    const si=STATUS_INFO[p.status]||STATUS_INFO.novo;
    const itens=p.itens.map(i=>\`\${i.qty}x \${i.nome}\`).join(', ');
    return \`<div class="ped-card">
      <div class="ped-head">
        <div class="ped-info">
          <div class="ped-nome">\${p.cliente||'Cliente'}</div>
          \${p.fone?\`<div class="ped-fone">📱 \${p.fone}</div>\`:''}
          <div class="ped-hora">\${p.criadoEmFmt||''}</div>
        </div>
        <div class="ped-tot">\${fmt(p.total)}</div>
      </div>
      <div class="ped-itens">\${itens}\${p.obs?\`<br>💬 \${p.obs}\`:''}<br>💳 \${p.pay||''}</div>
      <span class="ped-status \${si.cls}">\${si.label}</span>
      <div class="ped-btns">
        \${p.status==='aguardando_pagamento'?\`<button class="bst" style="background:#1a2a00;color:#f4c430;border:1px solid #f4c430;" onclick="confirmarPagamento('\${p.id}')">💰 Confirmar Pagamento Recebido</button>\`:''}
        \${p.status==='novo'?\`<button class="bst bst-conf" onclick="mudarStatus('\${p.id}','confirmado')">✅ Confirmar</button>\`:''}
        \${p.status==='confirmado'?\`<button class="bst bst-prep" onclick="mudarStatus('\${p.id}','preparo')">🍳 Em preparo</button>\`:''}
        \${p.status==='preparo'?\`
          <button class="bst bst-entr" onclick="mudarStatus('\${p.id}','entrega')">🛵 Saiu p/ entrega</button>
          <button class="bst bst-ret" onclick="mudarStatus('\${p.id}','retirada')">🏪 Pronto p/ retirar</button>
        \`:''}
        \${(p.status==='entrega'||p.status==='retirada')?\`<button class="bst bst-ok" onclick="mudarStatus('\${p.id}','entregue')">✅ Entregue</button>\`:''}
        \${p.fone&&p.status!=='novo'&&p.status!=='aguardando_pagamento'?\`<button class="bst" style="background:#1a2a1a;color:#6db46d;" onclick="avisarCliente('\${p.id}')">📲 Avisar cliente</button>\`:''}
        <button class="bst" style="background:#2a1a1a;color:#ff6666;" onclick="delPed('\${p.id}')">🗑️</button>
      </div>
    </div>\`;
  }).join('');
}

window.mudarStatus=async function(id,novoStatus){
  const p=pedidos.find(x=>x.id===id);if(!p)return;
  p.status=novoStatus;
  await setDoc(doc(fdb,'pedidos',id),p);
  // Avisa cliente automaticamente se tiver fone
  if(p.fone) avisarClienteAuto(p,novoStatus);
  renderPedidos();atualizaBadgePed();
}

window.confirmarPagamento=async function(id){
  const p=pedidos.find(x=>x.id===id);if(!p)return;
  if(!confirm(\`Confirmar que recebeu o pagamento de \${fmt(p.total)} do pedido #\${String(p.num||'').padStart(4,'0')} — \${p.cliente}?\`))return;
  p.status='novo';
  await setDoc(doc(fdb,'pedidos',id),p);
  // Avisa cliente que pedido foi confirmado
  if(p.fone){
    const fone=p.fone.replace(/\\D/g,'');
    const foneCC=fone.length===11?\`55\${fone}\`:fone;
    const mc=\`✅ *Yanni Sushi*\\nOlá \${p.cliente}! Pagamento confirmado! Seu pedido está sendo preparado 🍣\\n⏱️ Tempo estimado: \${cfg.tempo||30} minutos\`;
    window.open(\`https://wa.me/\${foneCC}?text=\${encodeURIComponent(mc)}\`,'_blank');
  }
  renderPedidos();atualizaBadgePed();
}

function avisarClienteAuto(p,status){
  const msgs={
    confirmado:\`🍣 *Yanni Sushi*\\nOlá! Seu pedido foi confirmado e está sendo preparado! 😊\\n⏱️ Tempo estimado: \${cfg.tempo||30} minutos\`,
    preparo:\`🍳 *Yanni Sushi*\\nSeu pedido está sendo preparado com carinho! Em breve fica pronto 😄\`,
    entrega:\`🛵 *Yanni Sushi*\\nSeu pedido saiu para entrega! Já já chega 🎉\`,
    retirada:\`🏪 *Yanni Sushi*\\nSeu pedido está pronto para retirada! Pode vir buscar 🍣\`,
    entregue:\`✅ *Yanni Sushi*\\nPedido entregue! Obrigado pela preferência 🙏\\nBom apetite! 😋\`
  };
  const msg=msgs[status];if(!msg)return;
  const fone=p.fone.replace(/\\D/g,'');
  const numFone=fone.length===11?\`55\${fone}\`:fone.length===13?fone:\`55\${fone}\`;
  window.open(\`https://wa.me/\${numFone}?text=\${encodeURIComponent(msg)}\`,'_blank');
}

window.avisarCliente=function(id){
  const p=pedidos.find(x=>x.id===id);if(!p||!p.fone)return;
  avisarClienteAuto(p,p.status);
}

window.delPed=async function(id){
  if(!confirm('Remover pedido?'))return;
  await deleteDoc(doc(fdb,'pedidos',id));
}

// ── ESTOQUE ───────────────────────────────────────
window.renderEstoque=function(){
  const el=document.getElementById('estList');
  if(!produtos.length){el.innerHTML='<p style="color:#555;text-align:center;padding:20px;">Nenhum produto.</p>';return;}
  el.innerHTML=produtos.map(p=>{
    const est=p.estoque===undefined?0:p.estoque;
    const cls=est===0?'':''+est<=5?' baixo':''+'';
    return\`<div class="est-item">
      <img class="est-img" src="\${p.img||'https://placehold.co/38x38/1e1e1e/444?text=?'}" onerror="this.src='https://placehold.co/38x38/1e1e1e/444?text=?'">
      <div class="est-info"><div class="est-nome">\${p.nome}</div><div class="est-cat">\${p.cat}</div></div>
      <div class="est-ctrl">
        <button onclick="adjEst('\${p.id}',-1)">−</button>
        <span class="est-qty\${est>0&&est<=5?' baixo':''}\${est<0?' zerado':''}">\${est===0?'∞':est}</span>
        <button onclick="adjEst('\${p.id}',1)">+</button>
        <button class="est-inf" onclick="setEstInf('\${p.id}')">∞ Ilimitado</button>
      </div>
    </div>\`;
  }).join('');
}

window.adjEst=async function(id,d){
  const p=produtos.find(x=>x.id===id);if(!p)return;
  const atual=p.estoque||0;
  if(atual===0&&d<0)return;
  p.estoque=Math.max(0,atual+d);
  await setDoc(doc(fdb,'produtos',id),p);
  renderEstoque();
}

window.setEstInf=async function(id){
  const p=produtos.find(x=>x.id===id);if(!p)return;
  p.estoque=0;
  await setDoc(doc(fdb,'produtos',id),p);
  renderEstoque();
}

// ── REGISTRAR VENDA ───────────────────────────────
async function registrarVenda(itens,origem){
  try{await addDoc(collection(fdb,'vendas'),{data:new Date().toISOString(),origem,itens:itens.map(i=>({nome:i.nome,preco:i.preco,qty:i.qty,cat:i.cat||getCatByNome(i.nome)}))});}catch(e){console.error(e);}
}
function getCatByNome(nome){const p=produtos.find(x=>x.nome===nome);return p?p.cat:'Outros';}

// ── LOGIN — 4 SENHAS ──────────────────────────────
function mostrarBannerUsuario(nome,cor){
  document.querySelectorAll('.banner-usuario').forEach(b=>b.remove());
  const banner=document.createElement('div');
  banner.className='banner-usuario';
  banner.style.cssText='position:fixed;top:60px;right:14px;background:'+cor+';color:#fff;padding:6px 14px;border-radius:20px;font-weight:700;font-size:.8rem;z-index:998;box-shadow:0 2px 8px rgba(0,0,0,.4);';
  banner.textContent=nome;
  document.body.appendChild(banner);
}

window.checkAdmin=function(){
  const senha=prompt('Senha:');
  if(senha===null)return;
  // 1. DONO
  if(senha===cfg.pass){
    usuarioLogado={tipo:'dono',nome:'Dono'};
    document.getElementById('menuWrap').classList.add('admin-mode');
    document.getElementById('btnCmd').style.display='flex';
    document.getElementById('btnPed').style.display='flex';
    popCatSel();renderCatChips();renderBalcAdmin();
    document.getElementById('cfFone').value=cfg.fone;
    document.getElementById('cfFoneCozinha').value=cfg.foneCozinha||'5589981216999';
    document.getElementById('cfPix').value=cfg.pix||'89981216999';
    document.getElementById('cfTempo').value=cfg.tempo||30;
    document.getElementById('cfKdsWpp').checked=cfg.kdsWpp!==false;
    document.getElementById('cfEpsonIp').value=cfg.epsonIp||'';
    document.getElementById('cfGedayNome').value=cfg.gedayNome||'';
    const cte=document.getElementById('cfTaxaEntrega');if(cte)cte.value=cfg.taxaEntrega||3;
    const cwe=document.getElementById('cfWhatsEntregador');if(cwe)cwe.value=cfg.whatsappEntregador||'';
    const cpa=document.getElementById('cfPassAdmin');if(cpa)cpa.value='';
    if(cfg.logo){const p=document.getElementById('logoPreview');if(p){p.src=cfg.logo;p.style.display='block';}}
    atualizaBtnRecesso();
    mostrarBannerUsuario('👑 Dono — Acesso Total','#c01828');
    opn('ovAdmin');
  // 2. ADMIN — só cardápio
  } else if(senha===cfg.passAdmin){
    usuarioLogado={tipo:'admin',nome:'Admin'};
    document.getElementById('menuWrap').classList.add('admin-mode');
    popCatSel();renderCatChips();
    mostrarBannerUsuario('⚙️ Admin — Cardápio','#555');
    opn('ovAdmin');
    // Esconde abas restritas
    ['btnTabRel','btnTabCfg','btnTabEst'].forEach(id=>{const el=document.getElementById(id);if(el)el.style.display='none';});
  // 3. GARÇOM geral
  } else if(senha===cfg.passGarcom){
    usuarioLogado={tipo:'garcom',nome:'Garçom'};
    document.getElementById('btnCmd').style.display='flex';
    escutarChamadas();
    mostrarBannerUsuario('👤 Garçom','#4caf50');
    openComandas();
  // 4. GARÇOM individual
  } else {
    const g=garcons.find(x=>x.senha===senha);
    if(g){
      usuarioLogado={tipo:'garcom',nome:g.nome,id:g.id};
      document.getElementById('btnCmd').style.display='flex';
      escutarChamadas();
      mostrarBannerUsuario('👤 '+g.nome,'#4caf50');
      openComandas();
    } else if(senha!==null){
      alert('Senha incorreta.');
    }
  }
}
window.showTab=function(id,btn){document.querySelectorAll('.tc').forEach(t=>t.classList.remove('on'));document.querySelectorAll('.tb').forEach(b=>b.classList.remove('on'));document.getElementById(id).classList.add('on');if(btn)btn.classList.add('on');if(id==='tList')renderAList();if(id==='tCats')renderCatChips();if(id==='tBalc')renderBalcAdmin();}
function popCatSel(){const s=document.getElementById('fCat');s.innerHTML='<option value="">-- Selecione --</option>';(cfg.cats||[]).forEach(c=>s.innerHTML+=\`<option value="\${c}">\${c}</option>\`);}
window.addCat=function(){const v=document.getElementById('fNewCat').value.trim();if(!v)return;if(!cfg.cats.includes(v)){cfg.cats.push(v);setDoc(doc(fdb,'config','main'),cfg);}document.getElementById('fNewCat').value='';renderCatChips();popCatSel();}
function renderCatChips(){document.getElementById('catChips').innerHTML=(cfg.cats||[]).map(c=>\`<div class="cchip">\${c}<span style="cursor:pointer;color:var(--gd);font-size:.75rem;margin-left:3px;" onclick="renameCat('\${c.replace(/'/g,"\\\\'")}')">✏️</span><span class="cx" onclick="rmCat('\${c.replace(/'/g,"\\\\'")}')">✕</span></div>\`).join('');}
window.toggleDisponivel=async function(id){
  const p=produtos.find(x=>x.id===id);if(!p)return;
  p.disponivel=p.disponivel===false?true:false;
  await setDoc(doc(fdb,'produtos',id),p);
  renderAList();
  render();
}
window.rmCat=async function(c){if(!confirm(\`Remover categoria "\${c}"?\`))return;cfg.cats=cfg.cats.filter(x=>x!==c);await setDoc(doc(fdb,'config','main'),cfg);renderCatChips();popCatSel();}
window.renameCat=async function(c){
  const novo=prompt(\`Renomear "\${c}" para:\`,c);
  if(!novo||novo===c)return;
  // Atualiza cfg.cats
  const idx=cfg.cats.indexOf(c);
  if(idx>=0)cfg.cats[idx]=novo;
  await setDoc(doc(fdb,'config','main'),cfg);
  // Atualiza todos os produtos com essa categoria
  const snap=await getDocs(collection(fdb,'produtos'));
  for(const d of snap.docs){
    if(d.data().cat===c){
      await setDoc(doc(fdb,'produtos',d.id),{...d.data(),cat:novo});
    }
  }
  alert(\`Categoria renomeada para "\${novo}"! ✅\`);
  renderCatChips();popCatSel();
}
window.saveProd=async function(){
  const cat=document.getElementById('fCat').value,nome=document.getElementById('fNome').value.trim(),desc=document.getElementById('fDesc').value.trim(),prec=parseFloat(document.getElementById('fPreco').value),est=parseInt(document.getElementById('fEstoque').value)||0,b64el=document.getElementById('fImgB64'),img=(b64el&&b64el.value)||document.getElementById('fImg').value.trim(),eid=document.getElementById('editId').value;
  if(!cat){alert('Selecione categoria.');return;}if(!nome){alert('Nome obrigatório.');return;}if(isNaN(prec)||prec<0){alert('Preço inválido.');return;}
  const pid=eid||uid();
  await setDoc(doc(fdb,'produtos',pid),{id:pid,cat,nome,desc,preco:prec,img,estoque:est});
  cancelEdit();const m=document.getElementById('mok');m.style.display='block';setTimeout(()=>m.style.display='none',2500);
}
window.cancelEdit=function(){document.getElementById('editId').value='';['fNome','fDesc','fImg'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});const b=document.getElementById('fImgB64');if(b)b.value='';const ff=document.getElementById('fImgFile');if(ff)ff.value='';document.getElementById('fPreco').value='';document.getElementById('fEstoque').value='0';document.getElementById('fCat').value='';document.getElementById('imgPrev').style.display='none';document.getElementById('btnSv').textContent='✅ Adicionar Produto';document.getElementById('btnCE').style.display='none';imgTab('url');}
window.editProd=function(id){const p=produtos.find(x=>x.id===id);if(!p)return;popCatSel();document.getElementById('fCat').value=p.cat;document.getElementById('fNome').value=p.nome;document.getElementById('fDesc').value=p.desc||'';document.getElementById('fPreco').value=p.preco;document.getElementById('fEstoque').value=p.estoque||0;const isB64=p.img&&p.img.startsWith('data:');if(isB64){imgTab('up');document.getElementById('fImgB64').value=p.img;document.getElementById('fImg').value='';}else{imgTab('url');document.getElementById('fImg').value=p.img||'';document.getElementById('fImgB64').value='';}prvImg(p.img||'');document.getElementById('editId').value=id;document.getElementById('btnSv').textContent='💾 Salvar';document.getElementById('btnCE').style.display='block';opn('ovAdmin');showTab('tAdd',document.querySelector('.tb'));document.querySelector('.tb').classList.add('on');}
window.delProd=async function(id){const p=produtos.find(x=>x.id===id);if(!p||!confirm(\`Remover "\${p.nome}"?\`))return;await deleteDoc(doc(fdb,'produtos',id));}
function renderAList(){
  const q=(document.getElementById('srch').value||'').toLowerCase();
  const f=produtos.filter(p=>p.nome.toLowerCase().includes(q)||p.cat.toLowerCase().includes(q));
  document.getElementById('aCnt').textContent=\`\${f.length} produto(s)\`;
  document.getElementById('aProdList').innerHTML=f.map(p=>{
    const tem=p.disponivel!==false;
    const btnStyle=tem
      ?'background:#1a3a1a;color:#6db46d;border:1px solid #6db46d;border-radius:5px;padding:4px 8px;cursor:pointer;font-size:.72rem;font-weight:700;min-width:80px;'
      :'background:#3a1a1a;color:#ff6666;border:1px solid #ff4444;border-radius:5px;padding:4px 8px;cursor:pointer;font-size:.72rem;font-weight:700;min-width:80px;';
    const btnTxt=tem?'✅ Tem':'❌ Esgotado';
    return\`<div class="api" style="border-left:3px solid \${tem?'#6db46d':'#ff4444'};">
      <img src="\${p.img||'https://placehold.co/44x44/1e1e1e/444?text=?'}" onerror="this.src='https://placehold.co/44x44/1e1e1e/444?text=?'">
      <div class="ai"><strong>\${p.nome}</strong><span>\${p.cat} · \${fmt(p.preco)}</span></div>
      <div class="aib">
        <button style="\${btnStyle}" onclick="toggleDisponivel('\${p.id}')">\${btnTxt}</button>
        <button class="bed" onclick="editProd('\${p.id}')">✏️</button>
        <button class="brm" onclick="delProd('\${p.id}')">✕</button>
      </div>
    </div>\`;
  }).join('');
}
window.imgTab=function(t){const isUrl=t==='url';document.getElementById('tabUrl').style.display=isUrl?'block':'none';document.getElementById('tabUp').style.display=isUrl?'none':'block';document.getElementById('btnTabUrl').style.cssText=\`flex:1;padding:7px;border-radius:6px;border:2px solid \${isUrl?'var(--pr)':'#333'};background:\${isUrl?'var(--pr)':'#222'};color:\${isUrl?'#fff':'#aaa'};font-weight:700;font-size:.8rem;cursor:pointer;\`;document.getElementById('btnTabUp').style.cssText=\`flex:1;padding:7px;border-radius:6px;border:2px solid \${!isUrl?'var(--pr)':'#333'};background:\${!isUrl?'var(--pr)':'#222'};color:\${!isUrl?'#fff':'#aaa'};font-weight:700;font-size:.8rem;cursor:pointer;\`;document.getElementById('imgPrev').style.display='none';}
window.handleImgUpload=function(input){const file=input.files[0];if(!file)return;if(file.size>2*1024*1024){alert('Máx 2MB!');input.value='';return;}const reader=new FileReader();reader.onload=function(e){const b64=e.target.result;document.getElementById('fImgB64').value=b64;document.getElementById('fImg').value='';const prev=document.getElementById('imgPrev');prev.src=b64;prev.style.display='block';};reader.readAsDataURL(file);}
window.prvImg=function(u){const i=document.getElementById('imgPrev');if(u){i.src=u;i.style.display='block';}else i.style.display='none';}
window.handleLogoUpload=function(input){
  const file=input.files[0];if(!file)return;
  if(file.size>2*1024*1024){alert('Máx 2MB!');input.value='';return;}
  const reader=new FileReader();
  reader.onload=function(e){
    const b64=e.target.result;
    const prev=document.getElementById('logoPreview');
    prev.src=b64;prev.style.display='block';
    const logoImg=document.getElementById('logoImg');
    if(logoImg){logoImg.src=b64;logoImg.style.display='block';}
    cfg.logo=b64;
  };
  reader.readAsDataURL(file);
}
window.saveCfg=async function(){
  cfg.fone=document.getElementById('cfFone').value.trim()||cfg.fone;
  cfg.foneCozinha=document.getElementById('cfFoneCozinha').value.trim()||cfg.foneCozinha||'5589981216999';
  cfg.pix=document.getElementById('cfPix').value.trim();
  cfg.tempo=parseInt(document.getElementById('cfTempo').value)||30;
  cfg.kdsWpp=document.getElementById('cfKdsWpp').checked;
  const np=document.getElementById('cfPass').value.trim();if(np)cfg.pass=np;
  const ng=document.getElementById('cfPassGarcom').value.trim();if(ng)cfg.passGarcom=ng;
  const na=document.getElementById('cfPassAdmin');if(na&&na.value.trim())cfg.passAdmin=na.value.trim();
  cfg.epsonIp=document.getElementById('cfEpsonIp').value.trim();
  cfg.gedayNome=document.getElementById('cfGedayNome').value.trim();
  const cte=document.getElementById('cfTaxaEntrega');if(cte)cfg.taxaEntrega=parseFloat(cte.value)||3;
  const cwe=document.getElementById('cfWhatsEntregador');if(cwe)cfg.whatsappEntregador=cwe.value.trim();
  await setDoc(doc(fdb,'config','main'),cfg);
  if(cfg.logo){const logoImg=document.getElementById('logoImg');if(logoImg){logoImg.src=cfg.logo;logoImg.style.display='block';}}
  alert('Configuracoes salvas!');
}
window.resetAll=async function(){if(!confirm('Apaga TUDO. Certeza?'))return;const snap=await getDocs(collection(fdb,'produtos'));for(const d of snap.docs)await deleteDoc(d.ref);location.reload();}

// ── BALCÃO ────────────────────────────────────────
function renderBalcAdmin(){document.getElementById('balcList').innerHTML=balcao.map(b=>\`<div style="display:flex;align-items:center;gap:7px;margin-bottom:6px;background:#1e1e1e;padding:7px 10px;border-radius:7px;"><input value="\${b.nome}" onchange="updBalc('\${b.id}','nome',this.value)" style="flex:1;background:#111;border:1px solid #2a2a2a;color:#fff;padding:6px 8px;border-radius:5px;font-size:.83rem;"><input type="number" value="\${b.preco}" step="0.01" onchange="updBalc('\${b.id}','preco',this.value)" style="width:70px;background:#111;border:1px solid #2a2a2a;color:#fff;padding:6px 7px;border-radius:5px;font-size:.83rem;"><button onclick="rmBalc('\${b.id}')" style="background:none;border:1px solid #ff4444;color:#ff4444;padding:5px 8px;border-radius:5px;cursor:pointer;">✕</button></div>\`).join('');}
window.updBalc=async function(id,field,val){const b=balcao.find(x=>x.id===id);if(!b)return;b[field]=field==='preco'?parseFloat(val)||0:val;await setDoc(doc(fdb,'balcao',id),b);}
window.rmBalc=async function(id){balcao=balcao.filter(x=>x.id!==id);await deleteDoc(doc(fdb,'balcao',id));renderBalcAdmin();}
window.addBalcItem=async function(){const n=document.getElementById('bNome').value.trim(),p=parseFloat(document.getElementById('bPreco').value)||0;if(!n)return;const nb={id:uid(),nome:n,preco:p};balcao.push(nb);await setDoc(doc(fdb,'balcao',nb.id),nb);document.getElementById('bNome').value='';document.getElementById('bPreco').value='';renderBalcAdmin();}

// ── COMANDAS ──────────────────────────────────────
// ── COMANDAS — SISTEMA VISUAL ─────────────────────
let mesaSelecionada = null;
let cmdCatAtiva = 'all';
const TOTAL_MESAS = 15;

window.openComandas=function(){
  renderMesaGrid();
  renderGarcons();
  renderKDS();
  opn('ovCmd');
}

window.cmdTab=function(tab,btn){
  document.querySelectorAll('#ovCmd .tb').forEach(b=>b.classList.remove('on'));
  if(btn)btn.classList.add('on');
  document.getElementById('cmdTabMapa').style.display=tab==='mapa'?'block':'none';
  document.getElementById('cmdTabGarcons').style.display=tab==='garcons'?'block':'none';
  document.getElementById('cmdTabKds').style.display=tab==='kds'?'block':'none';
  if(tab==='kds')renderKDS();
}

function renderMesaGrid(){
  const grid=document.getElementById('mesaGrid');
  let html='';
  for(let i=1;i<=TOTAL_MESAS;i++){
    const cmd=comandas.find(c=>c.nome===\`Mesa \${i}\`&&c.aberta);
    const contaPedida=cmd&&cmd.contaPedida;
    const tot=cmd?cmd.itens.reduce((a,it)=>a+it.preco*it.qty,0):0;
    const cls=cmd?(contaPedida?'conta':'ocupada'):'livre';
    const ico=cmd?(contaPedida?'🟡':'🔴'):'🟢';
    const sel=mesaSelecionada&&mesaSelecionada.nome===\`Mesa \${i}\`?'selecionada':'';
    html+=\`<div class="mesa-card \${cls} \${sel}" onclick="selecionarMesa(\${i})">
      <div style="font-size:1.2rem;">\${ico}</div>
      <div class="mesa-num">Mesa \${i}</div>
      <div class="mesa-status">\${cmd?'Ocupada':'Livre'}</div>
      \${cmd?\`<div class="mesa-tot">\${fmt(tot)}</div>\`:''}
    </div>\`;
  }
  grid.innerHTML=html;
}

window.selecionarMesa=async function(num){
  const nome=\`Mesa \${num}\`;
  let cmd=comandas.find(c=>c.nome===nome&&c.aberta);
  if(!cmd){
    // Abre nova comanda para essa mesa
    const nc={id:uid(),nome,itens:[],aberta:true,criadaEm:new Date().toLocaleString('pt-BR')};
    await setDoc(doc(fdb,'comandas',nc.id),nc);
    cmd=nc;
  }
  mesaSelecionada=cmd;
  renderMesaGrid();
  renderDetalheComanda();
  document.getElementById('cmdDetalhe').style.display='block';
}

function renderDetalheComanda(){
  if(!mesaSelecionada)return;
  const c=comandas.find(x=>x.id===mesaSelecionada.id)||mesaSelecionada;
  mesaSelecionada=c;
  document.getElementById('cmdDetalheNome').textContent=\`🪑 \${c.nome}\`;
  const tot=c.itens.reduce((a,i)=>a+i.preco*i.qty,0);
  document.getElementById('cmdDetalheTot').textContent=fmt(tot);
  const el=document.getElementById('cmdDetalheItens');
  if(!c.itens.length){
    el.innerHTML='<p style="color:#555;text-align:center;padding:14px;font-size:.82rem;">Nenhum item ainda. Clique em "+ Adicionar Item"</p>';
    return;
  }
  el.innerHTML=c.itens.map((it,idx)=>\`
    <div class="cmd-item-row">
      <div class="cin">\${it.nome}\${it.obs?\`<span class="obs-txt">\${it.obs}</span>\`:''}</div>
      <div class="iqc">
        <button class="iqc-minus" onclick="cmdQty('\${c.id}',\${idx},-1)">−</button>
        <span class="iqc-num">\${it.qty}</span>
        <button class="iqc-plus" onclick="cmdQty('\${c.id}',\${idx},1)">+</button>
      </div>
      <div class="cip">\${fmt(it.preco*it.qty)}</div>
    </div>\`).join('');
}

window.rmItemComanda=async function(idx){
  const c=comandas.find(x=>x.id===mesaSelecionada.id);
  if(!c)return;
  c.itens.splice(idx,1);
  await setDoc(doc(fdb,'comandas',c.id),c);
  renderDetalheComanda();
}

window.fecharDetalhe=function(){
  mesaSelecionada=null;
  carrinhoComanda=[];
  updBtnEnviarCozinha();
  document.getElementById('cmdDetalhe').style.display='none';
  renderMesaGrid();
}

window.newCmd=async function(){
  const nm=document.getElementById('newCmdNm').value.trim();
  if(!nm){alert('Informe o nome ou mesa.');return;}
  const c={id:uid(),nome:nm,itens:[],aberta:true,criadaEm:new Date().toLocaleString('pt-BR')};
  await setDoc(doc(fdb,'comandas',c.id),c);
  document.getElementById('newCmdNm').value='';
  renderMesaGrid();
}

window.pedirConta=async function(){
  if(!mesaSelecionada)return;
  const c=comandas.find(x=>x.id===mesaSelecionada.id);
  if(!c)return;
  c.contaPedida=true;
  await setDoc(doc(fdb,'comandas',c.id),c);
  renderMesaGrid();
  alert(\`✅ Conta pedida para \${c.nome}! A mesa ficou marcada em amarelo.\`);
}

// ── CARDÁPIO VISUAL NA COMANDA ────────────────────
window.abrirCardapioComanda=function(){
  if(!mesaSelecionada)return;
  document.getElementById('cardapioCmdMesa').textContent=\`🪑 \${mesaSelecionada.nome}\`;
  cmdCatAtiva='all';
  renderCardapioCmd();
  opn('ovCardapioCmd');
}

function renderCardapioCmd(){
  // Categorias
  const cats=[...new Set(produtos.map(p=>p.cat))];
  document.getElementById('cardapioCmdCats').innerHTML=
    \`<button class="cat-chip-cmd \${cmdCatAtiva==='all'?'on':''}" onclick="setCatCmd('all',this)">Todos</button>\`+
    cats.map(c=>\`<button class="cat-chip-cmd \${cmdCatAtiva===c?'on':''}" onclick="setCatCmd('\${c.replace(/'/g,"\\\\'")}',this)">\${c}</button>\`).join('');

  // Produtos
  const lista=cmdCatAtiva==='all'?produtos:produtos.filter(p=>p.cat===cmdCatAtiva);
  document.getElementById('cardapioCmdGrid').innerHTML=lista
    .filter(p=>p.disponivel!==false)
    .map(p=>\`<div class="prod-card-cmd" onclick="abrirQty('\${p.id}')">
      <img src="\${p.img||'https://placehold.co/130x78/1a1a1a/444?text=?'}" onerror="this.src='https://placehold.co/130x78/1a1a1a/444?text=?'">
      <div class="pnm">\${p.nome}</div>
      <div class="ppr">\${fmt(p.preco)}</div>
      <span class="padd">＋ Adicionar</span>
    </div>\`).join('');
}

window.setCatCmd=function(cat,btn){
  cmdCatAtiva=cat;
  document.querySelectorAll('.cat-chip-cmd').forEach(b=>b.classList.remove('on'));
  if(btn)btn.classList.add('on');
  renderCardapioCmd();
}

// ── +/- INLINE NOS ITENS DA COMANDA ──────────────
window.cmdQty=async function(cmdId,idx,delta){
  const c=comandas.find(x=>x.id===cmdId);if(!c)return;
  const it=c.itens[idx];if(!it)return;
  it.qty=Math.max(0,it.qty+delta);
  if(it.qty===0)c.itens.splice(idx,1);
  await setDoc(doc(fdb,'comandas',c.id),c);
  renderDetalheComanda();
}

// ── MODAL DE QUANTIDADE ───────────────────────────
let _qtyProd=null;
window.abrirQty=function(id){
  const p=produtos.find(x=>x.id===id);
  if(!p||!mesaSelecionada)return;
  _qtyProd=p;
  document.getElementById('qtyMesaTag').textContent='🪑 '+mesaSelecionada.nome;
  document.getElementById('qtyProdImg').src=p.img||'https://placehold.co/64x64/1a1a1a/444?text=?';
  document.getElementById('qtyProdNome').textContent=p.nome;
  document.getElementById('qtyProdPreco').textContent=fmt(p.preco)+' cada';
  document.getElementById('qtyN').textContent='1';
  document.getElementById('qtyObs').value='';
  document.getElementById('qtySub').textContent=fmt(p.preco);
  document.getElementById('qtyWrap').classList.add('open');
}
window.fecharQty=function(){
  document.getElementById('qtyWrap').classList.remove('open');
  _qtyProd=null;
}
window.qtyStep=function(d){
  const el=document.getElementById('qtyN');
  let v=Math.max(1,parseInt(el.textContent)+d);
  el.textContent=v;
  if(_qtyProd)document.getElementById('qtySub').textContent=fmt(_qtyProd.preco*v);
}
// Carrinho pendente da comanda — acumula antes de enviar à cozinha
let carrinhoComanda=[];

function updBtnEnviarCozinha(){
  const wrap=document.getElementById('btnEnviarCozinhaWrap');
  const btn=document.getElementById('btnEnviarCozinha');
  if(!wrap||!btn)return;
  const total=carrinhoComanda.reduce((a,i)=>a+i.qty,0);
  if(total>0){
    wrap.style.display='block';
    btn.textContent=\`📲 Enviar \${total} item\${total>1?'s':''} pra Cozinha\`;
  } else {
    wrap.style.display='none';
  }
}

window.enviarCarrinhoCozinha=function(){
  if(!carrinhoComanda.length||!mesaSelecionada)return;
  const c=comandas.find(x=>x.id===mesaSelecionada.id);if(!c)return;
  // Categorias que NÃO vão pra cozinha (só ficam na comanda)
  const naoVaiCozinha=['Cervejas','Refrigerantes','Whisky','Bebidas',
    'Sushis Tradicionais','Sushis Especiais','Sushis Hot','Sushis Hot Roll','Temaki Cru','Temaki Hot'];
  const itensCozinha=carrinhoComanda.filter(i=>!naoVaiCozinha.includes(i.cat));
  if(itensCozinha.length===0){
    alert('Esses itens são bebidas/sushis — ficam só na comanda, não vão pra cozinha! ✅');
    carrinhoComanda=[];
    updBtnEnviarCozinha();
    return;
  }
  const hora=new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
  const linhas=itensCozinha.map(i=>\`\${i.qty}x *\${i.nome}*\${i.obs?\` (\${i.obs})\`:''}\`).join('\\n');
  const msg=\`🍽️ *PEDIDO — \${c.nome}*\\n\${linhas}\\n⏰ \${hora}\`;
  const numCozinha=(cfg.foneCozinha||'5589981216999').replace(/\\D/g,'');
  window.open(\`https://wa.me/\${numCozinha}?text=\${encodeURIComponent(msg)}\`,'_blank');
  // Registra no KDS
  itensCozinha.forEach(i=>{
    addDoc(collection(fdb,'kds'),{mesa:c.nome,item:i.nome,preco:i.preco,qty:i.qty,
      criadoEm:new Date().toISOString(),pronto:false});
  });
  carrinhoComanda=[];
  updBtnEnviarCozinha();
  const t=document.getElementById('cmdToast');
  document.getElementById('cmdToastTxt').textContent=\`✅ Pedido enviado pra cozinha!\`;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2500);
}

window.confirmarQty=async function(){
  const p=_qtyProd;if(!p||!mesaSelecionada)return;
  const qty=parseInt(document.getElementById('qtyN').textContent)||1;
  const obs=document.getElementById('qtyObs').value.trim();
  const c=comandas.find(x=>x.id===mesaSelecionada.id);if(!c)return;
  // Salva na comanda
  const ex=c.itens.find(i=>i.nome===p.nome&&(i.obs||'')===(obs));
  if(ex)ex.qty+=qty;
  else c.itens.push({id:uid(),nome:p.nome,preco:p.preco,qty,obs,cat:p.cat});
  await setDoc(doc(fdb,'comandas',c.id),c);
  // Acumula no carrinho pendente
  const exCart=carrinhoComanda.find(i=>i.nome===p.nome&&(i.obs||'')===(obs));
  if(exCart)exCart.qty+=qty;
  else carrinhoComanda.push({nome:p.nome,preco:p.preco,qty,obs,cat:p.cat});
  fecharQty();
  renderDetalheComanda();
  updBtnEnviarCozinha();
  const t=document.getElementById('cmdToast');
  document.getElementById('cmdToastTxt').textContent=\`\${qty}x \${p.nome} adicionado ✅\`;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2200);
}
window.addItemCmdVisual=function(id){abrirQty(id);}
window.rmItemComanda=async function(idx){
  const c=comandas.find(x=>x.id===mesaSelecionada.id);if(!c)return;
  c.itens.splice(idx,1);
  await setDoc(doc(fdb,'comandas',c.id),c);
  renderDetalheComanda();
}

// ── DIVISÃO DE CONTA POR PESSOA ──────────────────
let divPessoas=[];
let divPessoaAtiva=0;
let divItensExpandidos=[];
let _divMesaId=null; // persiste a mesa entre aberturas

window.abrirDivisao=function(){
  if(!mesaSelecionada)return;
  const c=comandas.find(x=>x.id===mesaSelecionada.id);
  if(!c||!c.itens.length){alert('Nenhum item na comanda!');return;}
  // Se mudou de mesa ou primeira vez, reseta
  if(_divMesaId!==mesaSelecionada.id){
    _divMesaId=mesaSelecionada.id;
    divItensExpandidos=[];
    c.itens.forEach(it=>{
      for(let i=0;i<it.qty;i++)
        divItensExpandidos.push({nome:it.nome,preco:it.preco,obs:it.obs||'',dono:null});
    });
    divPessoas=[{nome:'Pessoa 1'}];
    divPessoaAtiva=0;
  } else {
    // Sincroniza: adiciona itens novos que vieram depois
    let totalAtual=0;
    c.itens.forEach(it=>totalAtual+=it.qty);
    if(divItensExpandidos.length!==totalAtual){
      // Recalcula mantendo atribuições existentes por nome
      const novosExpandidos=[];
      c.itens.forEach(it=>{
        for(let i=0;i<it.qty;i++){
          const anterior=divItensExpandidos.find(x=>x.nome===it.nome&&x.dono!==undefined);
          novosExpandidos.push({nome:it.nome,preco:it.preco,obs:it.obs||'',dono:null});
        }
      });
      // Preserva atribuições antigas por posição
      divItensExpandidos.forEach((old,i)=>{if(old.dono!==null&&novosExpandidos[i])novosExpandidos[i].dono=old.dono;});
      divItensExpandidos=novosExpandidos;
    }
  }
  const tot=divItensExpandidos.reduce((a,i)=>a+i.preco,0);
  document.getElementById('divTotGeral').textContent=fmt(tot);
  document.getElementById('divNovaPessoa').value='';
  renderDivAbasEItens();
  opn('ovDivisao');
}

window.fecharDivisao=function(){
  const livre=divItensExpandidos.filter(i=>i.dono===null).length;
  if(livre>0){
    if(!confirm(\`Ainda há \${livre} item(ns) sem dono. Fechar mesmo assim?\`))return;
  }
  cls('ovDivisao');
}

function renderDivAbasEItens(){
  // Botão dividir igual
  const btnIgual=document.getElementById('divIgualBtn');
  if(btnIgual)btnIgual.style.display=divPessoas.length>=2?'block':'none';

  // Barra de progresso
  const total=divItensExpandidos.length;
  const atribTotal=divItensExpandidos.filter(i=>i.dono!==null).length;
  const pct=total?Math.round(atribTotal/total*100):0;
  const bar=document.getElementById('divProgressBar');
  if(bar)bar.style.width=pct+'%';
  const cont=document.getElementById('divContagem');
  if(cont)cont.textContent=\`\${atribTotal}/\${total}\`;

  // Abas com botão de remover pessoa e renomear (duplo clique)
  const abas=document.getElementById('divAbasPessoas');
  abas.innerHTML=divPessoas.map((p,pi)=>{
    const total_p=divItensExpandidos.filter(i=>i.dono===pi).reduce((a,i)=>a+i.preco,0);
    const qtd=divItensExpandidos.filter(i=>i.dono===pi).length;
    const on=pi===divPessoaAtiva;
    return \`<div class="div-aba-wrap">
      <div onclick="divSelecionarPessoa(\${pi})" ondblclick="divRenomear(\${pi})" title="Clique para selecionar • Duplo clique para renomear"
        style="cursor:pointer;padding:7px 13px;border-radius:20px;font-size:.8rem;font-weight:700;
        background:\${on?'var(--pr)':'#2a2a2a'};color:\${on?'#fff':'#aaa'};border:2px solid \${on?'var(--pr)':'transparent'};
        display:flex;align-items:center;gap:6px;transition:.15s;user-select:none;">
        👤 \${p.nome}
        <span style="background:\${on?'rgba(255,255,255,.25)':'#444'};border-radius:10px;padding:1px 7px;font-size:.7rem;">\${qtd>0?\`\${qtd}x · \`:''} \${fmt(total_p)}</span>
      </div>
      \${divPessoas.length>1?\`<button class="div-aba-rm" onclick="divRmPessoa(\${pi})" title="Remover pessoa">✕</button>\`:''}
    </div>\`;
  }).join('');

  // Instrução
  const instr=document.getElementById('divInstrucao');
  if(divPessoaAtiva!==null&&divPessoas[divPessoaAtiva]){
    instr.innerHTML=\`👆 Clique nos itens para atribuir a: <strong style="color:var(--pr);">\${divPessoas[divPessoaAtiva].nome}</strong>\`;
  }

  // Pool de itens
  const pool=document.getElementById('divItensPool');
  const livres=divItensExpandidos.filter(i=>i.dono===null);
  const atribs=divItensExpandidos.filter(i=>i.dono!==null);
  let html='';

  if(livres.length){
    html+=\`<div style="font-size:.72rem;color:#ff9955;padding:4px 6px 6px;font-weight:700;">📋 A distribuir (\${livres.length} item\${livres.length>1?'s':''})</div>\`;
    divItensExpandidos.forEach((it,ii)=>{
      if(it.dono!==null)return;
      html+=\`<div onclick="divAtribuirItem(\${ii})" style="display:flex;justify-content:space-between;align-items:center;
        padding:9px 11px;background:#1e1e1e;border-radius:7px;margin-bottom:5px;cursor:pointer;border:2px solid transparent;
        transition:.12s;" onmouseover="this.style.borderColor='var(--pr)';this.style.background='#251010'"
        onmouseout="this.style.borderColor='transparent';this.style.background='#1e1e1e'">
        <span style="font-size:.86rem;">🔴 \${it.nome}\${it.obs?\` <span style='color:#666;font-size:.72rem;'>(\${it.obs})</span>\`:''}</span>
        <span style="color:var(--pr);font-weight:700;font-size:.86rem;margin-left:8px;flex-shrink:0;">\${fmt(it.preco)}</span>
      </div>\`;
    });
  } else if(total>0){
    html+=\`<div style="text-align:center;padding:14px 0 6px;color:var(--gn);font-weight:700;font-size:.88rem;">✅ Todos os itens foram distribuídos!</div>\`;
  }

  if(atribs.length){
    html+=\`<div style="font-size:.72rem;color:#888;padding:10px 6px 5px;font-weight:700;border-top:1px solid #222;margin-top:4px;">
      ✅ Já atribuídos — <span style="color:#ff8888;font-size:.7rem;">clique em ✕ para remover de uma pessoa</span>
    </div>\`;
    divItensExpandidos.forEach((it,ii)=>{
      if(it.dono===null)return;
      const nomeDono=divPessoas[it.dono]?.nome||'?';
      html+=\`<div class="div-item-atrib">
        <span class="din">✅ \${it.nome}\${it.obs?\` <span style='color:#666;font-size:.7rem;'>(\${it.obs})</span>\`:''} <span class="ddono">→ \${nomeDono}</span></span>
        <span class="dval">\${fmt(it.preco)}</span>
        <button class="div-btn-rm" onclick="divDevolverItem(\${ii})" title="Remover desta pessoa">✕ devolver</button>
      </div>\`;
    });
  }
  pool.innerHTML=html;

  // Atualiza restante
  const restante=livres.reduce((a,i)=>a+i.preco,0);
  document.getElementById('divNaoAtrib').textContent=fmt(restante);
  // Remove resumo anterior se items mudarem
  const ant=document.getElementById('divResumoFinal');if(ant)ant.remove();
}

window.divSelecionarPessoa=function(pi){
  divPessoaAtiva=pi;
  renderDivAbasEItens();
}

window.divAtribuirItem=function(ii){
  if(divPessoaAtiva===null||!divPessoas[divPessoaAtiva]){
    alert('Selecione uma pessoa primeiro!');return;
  }
  divItensExpandidos[ii].dono=divPessoaAtiva;
  renderDivAbasEItens();
}

window.divDevolverItem=function(ii){
  const nomeDono=divPessoas[divItensExpandidos[ii].dono]?.nome||'?';
  const nomeItem=divItensExpandidos[ii].nome;
  // Devolve direto sem confirm pra ser rápido
  divItensExpandidos[ii].dono=null;
  renderDivAbasEItens();
}

window.divAddPessoa=function(){
  const nm=document.getElementById('divNovaPessoa').value.trim()||\`Pessoa \${divPessoas.length+1}\`;
  divPessoas.push({nome:nm});
  divPessoaAtiva=divPessoas.length-1;
  document.getElementById('divNovaPessoa').value='';
  renderDivAbasEItens();
}

window.divRmPessoa=function(pi){
  const nm=divPessoas[pi].nome;
  const qtd=divItensExpandidos.filter(i=>i.dono===pi).length;
  if(!confirm(\`Remover "\${nm}"?\${qtd>0?\`\\n\${qtd} item(ns) serão devolvidos ao pool.\`:''}\`))return;
  // Devolve itens da pessoa removida
  divItensExpandidos.forEach(it=>{if(it.dono===pi)it.dono=null;});
  // Reajusta índices de dono para quem veio depois
  divItensExpandidos.forEach(it=>{if(it.dono!==null&&it.dono>pi)it.dono--;});
  divPessoas.splice(pi,1);
  if(divPessoaAtiva>=divPessoas.length)divPessoaAtiva=divPessoas.length-1;
  renderDivAbasEItens();
}

window.divRenomear=function(pi){
  const atual=divPessoas[pi].nome;
  const novo=prompt(\`Renomear "\${atual}" para:\`,atual);
  if(novo&&novo.trim()&&novo.trim()!==atual){
    divPessoas[pi].nome=novo.trim();
    renderDivAbasEItens();
  }
}

window.divIgual=function(){
  if(divPessoas.length<2){alert('Adicione pelo menos 2 pessoas!');return;}
  if(!confirm(\`Distribuir todos os itens igualmente entre \${divPessoas.length} pessoas?\\nItens que não dividem exatamente ficarão no início da lista.\`))return;
  // Reseta todas as atribuições
  divItensExpandidos.forEach(it=>it.dono=null);
  // Distribui em rodízio
  let idx=0;
  divItensExpandidos.forEach(it=>{
    it.dono=idx%divPessoas.length;
    idx++;
  });
  divPessoaAtiva=0;
  renderDivAbasEItens();
}

window.gerarResumoDiv=function(){
  const c=mesaSelecionada?comandas.find(x=>x.id===mesaSelecionada.id):null;if(!c)return;
  const livre=divItensExpandidos.filter(i=>i.dono===null);
  let html=\`<div style="margin-top:14px;background:#0d1a0d;border:1px solid #1e3a1e;border-radius:10px;padding:14px;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
      <span style="font-size:.88rem;font-weight:800;color:var(--gn);">📊 Resumo — \${c.nome}</span>
    </div>\`;
  divPessoas.forEach((p,pi)=>{
    const itens=divItensExpandidos.filter(i=>i.dono===pi);
    const tot=itens.reduce((a,i)=>a+i.preco,0);
    html+=\`<div style="background:#111;border-radius:8px;padding:10px;margin-bottom:8px;border-left:3px solid var(--pr);">
      <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
        <span style="font-weight:700;">👤 \${p.nome}</span>
        <span style="color:var(--pr);font-weight:800;font-size:1.05rem;">\${fmt(tot)}</span>
      </div>\`;
    itens.forEach(it=>{
      html+=\`<div style="display:flex;justify-content:space-between;font-size:.76rem;color:#888;padding:2px 0;">
        <span>• \${it.nome}\${it.obs?\` (\${it.obs})\`:''}</span><span>\${fmt(it.preco)}</span></div>\`;
    });
    if(!itens.length)html+=\`<div style="font-size:.76rem;color:#555;font-style:italic;">Nenhum item atribuído</div>\`;
    html+=\`</div>\`;
  });
  if(livre.length){
    const totNao=livre.reduce((a,i)=>a+i.preco,0);
    html+=\`<div style="background:#1a1000;border:1px solid #3a2a00;border-radius:8px;padding:10px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
        <span style="font-weight:700;color:var(--gd);">⚠️ Não atribuídos (\${livre.length})</span>
        <span style="color:var(--gd);font-weight:800;">\${fmt(totNao)}</span>
      </div>
      \${livre.map(it=>\`<div style="display:flex;justify-content:space-between;font-size:.76rem;color:#888;padding:2px 0;">
        <span>• \${it.nome}</span><span>\${fmt(it.preco)}</span></div>\`).join('')}
    </div>\`;
  }
  html+=\`</div>\`;
  const ant=document.getElementById('divResumoFinal');if(ant)ant.remove();
  const el=document.createElement('div');el.id='divResumoFinal';el.innerHTML=html;
  document.getElementById('divItensPool').after(el);
  setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'nearest'}),100);
}

// ── FECHAR MESA ───────────────────────────────────
window.openFecharMesa=function(){
  if(!mesaSelecionada)return;
  editCmdId=mesaSelecionada.id;
  const c=comandas.find(x=>x.id===mesaSelecionada.id);
  const tot=c.itens.reduce((a,i)=>a+i.preco*i.qty,0);
  document.getElementById('fcMesaNome').textContent='🪑 '+c.nome;
  document.getElementById('fcTot').textContent=fmt(tot);
  document.getElementById('fcResumo').innerHTML=c.itens.length
    ? c.itens.map(i=>\`
      <div class="fc-resumo-item">
        <span class="fci-nome">\${i.nome}\${i.obs?\` <span style="color:#666;font-size:.75rem;">(\${i.obs})</span>\`:''}</span>
        <span class="fci-qty">\${i.qty}x</span>
        <span class="fci-val">\${fmt(i.preco*i.qty)}</span>
      </div>\`).join('')
    : '<p style="color:#555;text-align:center;padding:10px;">Sem itens.</p>';
  document.getElementById('fcMpDiv').style.display='none';
  document.getElementById('fcPag').value='dinheiro';
  document.getElementById('fcParcInfo').textContent='';
  cls('ovCmd');
  opn('ovFechar');
}

// ── KDS — COZINHA ─────────────────────────────────
function renderKDS(){
  const el=document.getElementById('kdsList');if(!el)return;
  // Escuta em tempo real
  onSnapshot(collection(fdb,'kds'),snap=>{
    const itens=snap.docs.map(d=>({...d.data(),id:d.id}))
      .filter(x=>!x.pronto)
      .sort((a,b)=>a.criadoEm>b.criadoEm?1:-1);
    if(!itens.length){el.innerHTML='<p style="color:#555;text-align:center;padding:20px;">Nenhum pedido pendente 🎉</p>';return;}
    el.innerHTML=itens.map(it=>\`
      <div class="kds-card">
        <div class="kds-head">
          <span class="kds-mesa">🪑 \${it.mesa}</span>
          <span class="kds-time">\${new Date(it.criadoEm).toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}</span>
        </div>
        <div class="kds-item">\${it.qty}x <strong>\${it.item}</strong></div>
        <button onclick="marcarPronto('\${it.id}')" style="width:100%;margin-top:8px;background:var(--gn);color:#fff;border:none;padding:7px;border-radius:6px;cursor:pointer;font-weight:700;font-size:.82rem;">✅ Pronto!</button>
      </div>\`).join('');
  });
}

window.marcarPronto=async function(id){
  await setDoc(doc(fdb,'kds',id),{pronto:true},{merge:true});
  tocarBip();
}

// ── GARÇONS ───────────────────────────────────────
async function loadGarcons(){
  try{
    const snap=await getDoc(doc(fdb,'config','garcons'));
    if(snap.exists())garcons=snap.data().lista||[];
  }catch(e){}
}

async function saveGarcons(){
  await setDoc(doc(fdb,'config','garcons'),{lista:garcons});
}

function renderGarcons(){
  const el=document.getElementById('garconsList');if(!el)return;
  if(!garcons.length){el.innerHTML='<p style="color:#555;text-align:center;padding:14px;font-size:.82rem;">Nenhum garçom cadastrado.</p>';return;}
  el.innerHTML=garcons.map((g,i)=>\`
    <div class="garcom-card">
      <div style="width:32px;height:32px;background:var(--pr);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:700;color:#fff;">\${g.nome[0].toUpperCase()}</div>
      <div style="flex:1;"><strong style="font-size:.88rem;">\${g.nome}</strong><br><span style="font-size:.72rem;color:#888;">Senha: \${'•'.repeat(g.senha.length)}</span></div>
      <button onclick="rmGarcom(\${i})" style="background:none;border:1px solid #ff4444;color:#ff4444;padding:4px 8px;border-radius:5px;cursor:pointer;font-size:.72rem;">✕</button>
    </div>\`).join('');
}

window.addGarcom=async function(){
  const nome=document.getElementById('gNome').value.trim();
  const senha=document.getElementById('gSenha').value.trim();
  if(!nome||!senha){alert('Informe nome e senha!');return;}
  garcons.push({nome,senha});
  await saveGarcons();
  document.getElementById('gNome').value='';
  document.getElementById('gSenha').value='';
  renderGarcons();
}

window.rmGarcom=async function(i){
  if(!confirm(\`Remover garçom "\${garcons[i].nome}"?\`))return;
  garcons.splice(i,1);
  await saveGarcons();
  renderGarcons();
}

window.renderCmds=function(){renderMesaGrid();}
window.delCmd=async function(id){if(!confirm('Remover?'))return;await deleteDoc(doc(fdb,'comandas',id));}
window.openAddItem=function(cmdId){
  editCmdId=cmdId;const c=comandas.find(x=>x.id===cmdId);
  document.getElementById('addItemSub').textContent='Comanda: '+c.nome;
  const sel=document.getElementById('aiSel');sel.innerHTML='';
  [...new Set(produtos.map(p=>p.cat))].forEach(cat=>{const og=document.createElement('optgroup');og.label='📋 '+cat;produtos.filter(p=>p.cat===cat).forEach(p=>{const o=document.createElement('option');o.value=JSON.stringify({nome:p.nome,preco:p.preco,cat:p.cat});o.textContent=\`\${p.nome} — \${fmt(p.preco)}\`;og.appendChild(o);});sel.appendChild(og);});
  const og2=document.createElement('optgroup');og2.label='🍺 Balcão';balcao.forEach(b=>{const o=document.createElement('option');o.value=JSON.stringify({nome:b.nome,preco:b.preco,cat:'Balcão'});o.textContent=\`\${b.nome} — \${fmt(b.preco)}\`;og2.appendChild(o);});sel.appendChild(og2);
  document.getElementById('aiQty').value=1;document.getElementById('aiObs').value='';opn('ovAddItem');
}
window.confirmAddItem=async function(){const sel=document.getElementById('aiSel'),{nome,preco,cat}=JSON.parse(sel.value),qty=parseInt(document.getElementById('aiQty').value)||1,obs=document.getElementById('aiObs').value.trim(),c=comandas.find(x=>x.id===editCmdId);if(!c)return;c.itens.push({id:uid(),nome,preco,qty,obs,cat:cat||'Outros'});await setDoc(doc(fdb,'comandas',c.id),c);cls('ovAddItem');}
window.openFechar=function(id){
  editCmdId=id;const c=comandas.find(x=>x.id===id),tot=c.itens.reduce((a,i)=>a+i.preco*i.qty,0);
  document.getElementById('fcMesaNome').textContent='🪑 '+c.nome;
  document.getElementById('fcTot').textContent=fmt(tot);
  document.getElementById('fcResumo').innerHTML=c.itens.length
    ? c.itens.map(i=>\`<div class="fc-resumo-item"><span class="fci-nome">\${i.nome}\${i.obs?\` <span style="color:#666;font-size:.75rem;">(\${i.obs})</span>\`:''}</span><span class="fci-qty">\${i.qty}x</span><span class="fci-val">\${fmt(i.preco*i.qty)}</span></div>\`).join('')
    : '<p style="color:#555;text-align:center;padding:10px;">Sem itens.</p>';
  document.getElementById('fcMpDiv').style.display='none';document.getElementById('fcPag').value='dinheiro';document.getElementById('fcParcInfo').textContent='';opn('ovFechar');
}
window.fcPagChange=function(){document.getElementById('fcMpDiv').style.display=document.getElementById('fcPag').value==='mp'?'block':'none';}
window.calcFcParc=function(){const p=parseInt(document.getElementById('fcParc').value)||1,c=comandas.find(x=>x.id===editCmdId),tot=c.itens.reduce((a,i)=>a+i.preco*i.qty,0),inf=document.getElementById('fcParcInfo');if(p<=1){inf.textContent='';return;}const tJ=tot*Math.pow(1+TAXA,p);inf.textContent=\`\${p}x de \${fmt(tJ/p)} = total \${fmt(tJ)}\`;}
window.confirmarFechamento=async function(){
  const c=comandas.find(x=>x.id===editCmdId);if(!c)return;
  const tot=c.itens.reduce((a,i)=>a+i.preco*i.qty,0),pag=document.getElementById('fcPag').value,parc=parseInt(document.getElementById('fcParc')?document.getElementById('fcParc').value:1)||1;
  c.aberta=false;c.pag=pag;c.fechadaEm=new Date().toLocaleString('pt-BR');
  // Registra venda ANTES de deletar
  await registrarVenda(c.itens,'comanda');
  // Deleta a comanda do Firebase para liberar a mesa (verde)
  await deleteDoc(doc(fdb,'comandas',c.id));
  // Remove da lista local
  comandas=comandas.filter(x=>x.id!==editCmdId);
  mesaSelecionada=null;
  document.getElementById('cmdDetalhe').style.display='none';
  cls('ovFechar');
  renderMesaGrid();
  const labels={'dinheiro':'💵 Dinheiro','pix':'📱 Pix','cartao':'🏧 Cartão','mp':'💳 Infinite Pay'};
  let totFinal=tot,parcInfo='';
  if(pag==='mp'&&parc>1){totFinal=tot*Math.pow(1+TAXA,parc);parcInfo=\` (\${parc}x de \${fmt(totFinal/parc)})\`;}
  const w=window.open('','_blank','width=400,height=650');
  w.document.write(\`<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:monospace;padding:20px;font-size:13px;max-width:340px;margin:auto;}h2,p{text-align:center;}hr{border:none;border-top:1px dashed #000;margin:10px 0;}.row{display:flex;justify-content:space-between;margin:3px 0;}.tot{font-weight:bold;font-size:15px;}</style></head><body><h2>🍣 YANNI SUSHI</h2><p style="font-size:11px;">(89) 9 9821-6999</p><hr><p><b>Cliente/Mesa:</b> \${c.nome}</p><p><b>Abertura:</b> \${c.criadaEm}</p><p><b>Fechamento:</b> \${c.fechadaEm}</p><hr>\${c.itens.map(i=>\`<div class="row"><span>\${i.qty}x \${i.nome}\${i.obs?' ('+i.obs+')':''}</span><span>R$\${(i.preco*i.qty).toFixed(2)}</span></div>\`).join('')}<hr><div class="row tot"><span>TOTAL</span><span>R$\${totFinal.toFixed(2)}</span></div>\${parcInfo?\`<p style="font-size:11px;">\${parcInfo}</p>\`:''}<p style="font-size:11px;margin-top:4px;">\${labels[pag]||pag}</p><hr><p style="font-size:11px;margin-top:14px;">Obrigado! 🙏</p></body></html>\`);
  w.document.close();setTimeout(()=>{w.focus();w.print();},400);
}

// ── RELATÓRIO ─────────────────────────────────────
window.renderRel=function(){
  const tipo=document.getElementById('relTipo').value,catFiltro=document.getElementById('relCat').value,agora=new Date();
  const cats=[...new Set(produtos.map(p=>p.cat))];
  const catSel=document.getElementById('relCat'),catAtual=catSel.value;
  catSel.innerHTML='<option value="">Todas categorias</option>';
  cats.forEach(c=>catSel.innerHTML+=\`<option value="\${c}"\${c===catAtual?' selected':''}>\${c}</option>\`);
  const vf=vendas.filter(v=>{
    const d=new Date(v.data);
    if(tipo==='dia')return d.toDateString()===agora.toDateString();
    if(tipo==='semana'){const ini=new Date(agora);ini.setDate(agora.getDate()-agora.getDay());ini.setHours(0,0,0,0);const fim=new Date(ini);fim.setDate(ini.getDate()+6);fim.setHours(23,59,59,999);return d>=ini&&d<=fim;}
    if(tipo==='mes')return d.getMonth()===agora.getMonth()&&d.getFullYear()===agora.getFullYear();
    if(tipo==='ano')return d.getFullYear()===agora.getFullYear();
    return true;
  });
  const mapa={};
  vf.forEach(v=>{v.itens.forEach(i=>{if(catFiltro&&i.cat!==catFiltro)return;if(!mapa[i.nome])mapa[i.nome]={nome:i.nome,cat:i.cat||'Outros',qty:0,total:0,preco:i.preco};mapa[i.nome].qty+=i.qty;mapa[i.nome].total+=i.preco*i.qty;});});
  const itens=Object.values(mapa).sort((a,b)=>b.total-a.total);
  const totalGeral=itens.reduce((a,i)=>a+i.total,0),totalItens=itens.reduce((a,i)=>a+i.qty,0);
  document.getElementById('relSumCards').innerHTML=\`<div class="rel-sumcard"><div class="rsv">\${fmt(totalGeral)}</div><div class="rsl">Faturamento</div></div><div class="rel-sumcard"><div class="rsv">\${vf.length}</div><div class="rsl">Pedidos</div></div><div class="rel-sumcard"><div class="rsv">\${totalItens}</div><div class="rsl">Itens vendidos</div></div>\`;
  if(!itens.length){document.getElementById('relList').innerHTML='<div class="rel-empty">Nenhuma venda neste período.</div>';return;}
  let html='';
  itens.forEach(i=>{html+=\`<div class="rel-item"><div class="rel-item-info"><div class="rel-item-nome">\${i.nome}</div><div class="rel-item-cat">\${i.cat}</div></div><div class="rel-item-nums"><div class="rel-item-qty">\${i.qty}x · \${fmt(i.preco)}</div><div class="rel-item-val">\${fmt(i.total)}</div></div></div>\`;});
  html+=\`<div class="rel-total"><span>TOTAL GERAL</span><span>\${fmt(totalGeral)}</span></div>\`;
  document.getElementById('relList').innerHTML=html;
}

// ── QR CODE GENERATOR ─────────────────────────────
window.renderQR=function(){
  const qtd=parseInt(document.getElementById('qtdMesas').value)||15;
  const baseUrl=window.location.origin+window.location.pathname;
  const el=document.getElementById('qrList');
  el.innerHTML='';
  for(let i=1;i<=qtd;i++){
    const url=\`\${baseUrl}?mesa=\${i}\`;
    const qrUrl=\`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=\${encodeURIComponent(url)}\`;
    el.innerHTML+=\`<div style="background:#1e1e1e;border-radius:8px;padding:10px;text-align:center;">
      <img src="\${qrUrl}" style="width:100px;height:100px;border-radius:4px;background:#fff;padding:4px;">
      <div style="font-size:.78rem;font-weight:700;margin-top:6px;color:var(--pr);">Mesa \${i}</div>
      <div style="font-size:.6rem;color:#555;margin-top:2px;">Yanni Sushi</div>
    </div>\`;
  }
}

window.imprimirQRs=function(){
  const qtd=parseInt(document.getElementById('qtdMesas').value)||15;
  const baseUrl=window.location.origin+window.location.pathname;
  const w=window.open('','_blank','width=800,height=600');
  let html=\`<!DOCTYPE html><html><head><meta charset="UTF-8">
  <style>
    body{font-family:Arial,sans-serif;padding:20px;}
    .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}
    .card{text-align:center;border:1px solid #ddd;border-radius:8px;padding:14px;break-inside:avoid;}
    .card img{width:110px;height:110px;}
    .card h3{margin:8px 0 2px;font-size:14px;color:#e63946;}
    .card p{font-size:11px;color:#888;margin:0;}
    @media print{body{padding:10px;}}
  </style></head><body>
  <h2 style="text-align:center;color:#e63946;margin-bottom:20px;">🍣 Yanni Sushi — QR Codes das Mesas</h2>
  <div class="grid">\`;
  for(let i=1;i<=qtd;i++){
    const url=\`\${baseUrl}?mesa=\${i}\`;
    const qrUrl=\`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=\${encodeURIComponent(url)}\`;
    html+=\`<div class="card"><img src="\${qrUrl}"><h3>Mesa \${i}</h3><p>Escaneie para pedir</p></div>\`;
  }
  html+=\`</div></body></html>\`;
  w.document.write(html);
  w.document.close();
  setTimeout(()=>{w.focus();w.print();},1500);
}

// ── LIMPAR TESTES ─────────────────────────────────
window.limparTestes = async function(){
  if(!confirm('⚠️ Isso vai apagar TODAS as mesas ocupadas (apenas para testes).\\n\\nTem certeza?')) return;
  const btn = document.getElementById('btnLimparTestes');
  btn.textContent = '⏳ Apagando...';
  btn.disabled = true;
  try {
    const {getDocs,collection,deleteDoc,doc} = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
    const snap = await getDocs(collection(fdb,'comandas'));
    const promises = snap.docs.map(d => deleteDoc(doc(fdb,'comandas',d.id)));
    await Promise.all(promises);
    comandas = [];
    mesaSelecionada = null;
    document.getElementById('cmdDetalhe').style.display = 'none';
    renderMesaGrid();
    btn.textContent = '✅ Mesas limpas!';
    btn.style.background = '#4caf50';
    setTimeout(()=>{btn.textContent='🧹 Limpar Testes (apagar todas as mesas)';btn.style.background='#ff6600';btn.disabled=false;}, 3000);
  } catch(e) {
    alert('Erro: ' + e.message);
    btn.textContent = '🧹 Limpar Testes (apagar todas as mesas)';
    btn.disabled = false;
  }
}

// ── TRANSFERIR MESA ───────────────────────────────
window.abrirTransfer=function(){
  if(!mesaSelecionada)return;
  document.getElementById('transferOrigem').textContent=mesaSelecionada.nome;
  const grid=document.getElementById('transferGrid');
  let html='';
  for(let i=1;i<=TOTAL_MESAS;i++){
    const nm=\`Mesa \${i}\`;
    if(nm===mesaSelecionada.nome)continue;
    const ocupada=comandas.find(c=>c.nome===nm&&c.aberta);
    html+=\`<div class="transfer-card\${ocupada?' ':'dest'}" onclick="confirmarTransfer('\${nm}')">
      <div>\${ocupada?'🔴':'🟢'}</div>
      <div>Mesa \${i}</div>
    </div>\`;
  }
  grid.innerHTML=html;
  opn('ovTransfer');
}
window.confirmarTransfer=async function(destino){
  if(!mesaSelecionada)return;
  const c=comandas.find(x=>x.id===mesaSelecionada.id);
  if(!c)return;
  const jaOcupada=comandas.find(x=>x.nome===destino&&x.aberta);
  if(jaOcupada){
    if(!confirm(\`\${destino} já tem comanda aberta. Mesclar itens?\`))return;
    jaOcupada.itens=[...jaOcupada.itens,...c.itens];
    await setDoc(doc(fdb,'comandas',jaOcupada.id),jaOcupada);
    await deleteDoc(doc(fdb,'comandas',c.id));
  } else {
    c.nome=destino;
    await setDoc(doc(fdb,'comandas',c.id),c);
  }
  mesaSelecionada=null;
  document.getElementById('cmdDetalhe').style.display='none';
  cls('ovTransfer');
  renderMesaGrid();
}

// ── UPSELL ────────────────────────────────────────
let _upsellProd=null,_upsellTimer=null;
function mostrarUpsell(prodAdicionadoId){
  if(_upsellTimer)clearTimeout(_upsellTimer);
  // Pega categoria do produto adicionado
  const base=produtos.find(x=>x.id===prodAdicionadoId);
  if(!base)return;
  // Sugere item de categoria diferente e complementar
  const sugestoes=produtos.filter(p=>
    p.id!==prodAdicionadoId&&
    p.disponivel!==false&&
    p.cat!==base.cat&&
    !cart.find(c=>c.id===p.id)
  );
  if(!sugestoes.length)return;
  // Prioriza bebidas ou itens baratos
  const bebidas=sugestoes.filter(p=>p.cat==='Bebidas'||p.cat==='Refrigerantes'||p.cat==='Cervejas');
  const alvo=bebidas.length?bebidas[Math.floor(Math.random()*bebidas.length)]:sugestoes[Math.floor(Math.random()*sugestoes.length)];
  _upsellProd=alvo;
  document.getElementById('upsellImg').src=alvo.img||'https://placehold.co/44x44/1a1a1a/444?text=?';
  document.getElementById('upsellNome').textContent=alvo.nome;
  document.getElementById('upsellPreco').textContent='Adicionar por '+fmt(alvo.preco)+'?';
  const bar=document.getElementById('upsellBar');
  bar.classList.add('show');
  _upsellTimer=setTimeout(fecharUpsell,6000);
}
window.fecharUpsell=function(){
  document.getElementById('upsellBar').classList.remove('show');
  _upsellProd=null;
}
window.addUpsell=function(){
  if(!_upsellProd)return;
  addCart(_upsellProd.id);
  fecharUpsell();
}

// ── PEDIR DE NOVO ─────────────────────────────────
let _pedirNovoItens=[];
window.abrirPedirNovo=function(){
  // Pega último pedido (por mesa ou por qualquer pedido recente)
  const peds=[...pedidos].sort((a,b)=>b.criadoEm>a.criadoEm?1:-1);
  const ultimo=mesaAtual
    ?peds.find(p=>p.mesa===mesaAtual||p.cliente===mesaAtual)
    :peds[0];
  if(!ultimo||!ultimo.itens||!ultimo.itens.length){
    alert('Nenhum pedido anterior encontrado.');return;
  }
  _pedirNovoItens=ultimo.itens;
  const el=document.getElementById('pedirNovoList');
  el.innerHTML=\`<p style="font-size:.75rem;color:#888;margin-bottom:8px;">Pedido de \${ultimo.criadoEmFmt||''}:</p>\`+
    ultimo.itens.map((it,i)=>\`
      <div class="div-item-row">
        <input type="checkbox" id="pnck_\${i}" checked>
        <span class="div-item-nome">\${it.qty}x \${it.nome}</span>
        <span class="div-item-val">\${fmt(it.preco*it.qty)}</span>
      </div>\`).join('');
  opn('ovPedirNovo');
}
window.confirmarPedirNovo=function(){
  _pedirNovoItens.forEach((it,i)=>{
    const ck=document.getElementById(\`pnck_\${i}\`);
    if(!ck||!ck.checked)return;
    const p=produtos.find(x=>x.nome===it.nome);
    if(p){
      for(let q=0;q<it.qty;q++)addCart(p.id);
    }
  });
  cls('ovPedirNovo');
  openCart();
}

// ── PUSH NOTIFICATIONS ────────────────────────────
let pushToken=null;
async function iniciarPush(){
  // Registra service worker embutido
  if(!('serviceWorker' in navigator)||!('Notification' in window))return;
  try{
    // Service worker inline via blob
    const swCode=\`
self.addEventListener('push',e=>{
  const d=e.data?e.data.json():{};
  self.registration.showNotification(d.title||'Yanni Sushi 🍣',{
    body:d.body||'Atualização do seu pedido',
    icon:'/favicon.ico',
    badge:'/favicon.ico',
    tag:'yanni-pedido',
    renotify:true
  });
});
self.addEventListener('notificationclick',e=>{e.notification.close();clients.openWindow('/');});
\`;
    const blob=new Blob([swCode],{type:'application/javascript'});
    const swUrl=URL.createObjectURL(blob);
    const reg=await navigator.serviceWorker.register(swUrl,{scope:'/'});
    window._swReg=reg;
  }catch(e){console.log('SW:',e);}
}
window.pedirPermissaoPush=async function(){
  if(!('Notification' in window)){alert('Seu navegador não suporta notificações.');return;}
  const perm=await Notification.requestPermission();
  if(perm==='granted'){
    document.getElementById('pushBanner').style.display='none';
    localStorage.setItem('pushOk','1');
    // Notificação de teste
    new Notification('🍣 Yanni Sushi',{body:'Notificações ativadas! Você será avisado quando seu pedido ficar pronto.',icon:'/favicon.ico'});
  }
}
function mostrarPushBanner(){
  if(localStorage.getItem('pushOk')==='1')return;
  if(!('Notification' in window))return;
  if(Notification.permission==='granted'){localStorage.setItem('pushOk','1');return;}
  if(Notification.permission!=='denied'){
    setTimeout(()=>{document.getElementById('pushBanner').style.display='flex';},3000);
  }
}
function enviarNotifLocal(titulo,corpo){
  if(Notification.permission==='granted'){
    new Notification(titulo,{body:corpo,icon:'/favicon.ico',tag:'yanni-pedido',renotify:true});
  }
}

// ── TEMPO ESTIMADO BANNER ─────────────────────────
function atualizarTempoBanner(){
  const b=document.getElementById('tempoBanner');
  const v=document.getElementById('tempoValor');
  if(b&&v){
    v.textContent=(cfg.tempo||30)+' min';
    b.style.display='flex';
  }
}

// ── STATUS MESA COM PUSH ──────────────────────────
// Override escutarStatusMesa to also send push
const _origEscutar=window.escutarStatusMesa;
function escutarStatusMesaComPush(numMesa){
  onSnapshot(collection(fdb,'pedidos'),snap=>{
    const pedsMesa=snap.docs.map(d=>d.data()).filter(p=>p.cliente&&(p.mesa===\`Mesa \${numMesa}\`||p.cliente===\`Mesa \${numMesa}\`));
    if(pedsMesa.length){
      const ultimo=pedsMesa.sort((a,b)=>b.criadoEm>a.criadoEm?1:-1)[0];
      const statusTxt={
        'novo':'📋 Pedido recebido!',
        'confirmado':'✅ Pedido confirmado!',
        'preparo':'🍳 Sendo preparado...',
        'entrega':'🛵 A caminho!',
        'retirada':'🏪 Pronto para retirar!',
        'entregue':'✅ Pedido entregue!'
      };
      const txt=statusTxt[ultimo.status]||'📋 Pedido enviado!';
      document.getElementById('statusMesaTxt').textContent=txt;
      document.getElementById('ovStatusMesa').style.display='block';
      // Push notification
      enviarNotifLocal('🍣 Yanni Sushi — '+txt,'Pedido da '+\`Mesa \${numMesa}\`);
    }
  });
}

// ── OVERRIDE addCart PARA UPSELL ──────────────────
// Sugestao aparece so uma vez ao abrir o carrinho
let _upsellFeito=false;
const _origAddCart=window.addCart;
window.addCart=function(id){
  _origAddCart(id);
}


// ── DELIVERY ──────────────────────────────────────
let pedidosDelivery=[];
let filtroDelivAtual='todos';

window.openDelivery=function(){
  filtroDelivAtual='todos';
  renderDelivery();
  opn('ovDelivery');
}

window.filtroDeliv=function(f,btn){
  filtroDelivAtual=f;
  document.querySelectorAll('#ovDelivery .bst').forEach(b=>b.style.opacity='.5');
  if(btn)btn.style.opacity='1';
  renderDelivery();
}

function renderDelivery(){
  const el=document.getElementById('delivList');if(!el)return;
  let lista=pedidos.filter(p=>p.tipo==='delivery'||p.endereco);
  lista=[...lista].sort((a,b)=>b.criadoEm>a.criadoEm?1:-1);
  if(filtroDelivAtual!=='todos')lista=lista.filter(p=>p.status===filtroDelivAtual);
  if(!lista.length){el.innerHTML='<p style="color:#555;text-align:center;padding:20px;">Nenhum pedido de delivery.</p>';return;}
  el.innerHTML=lista.map(p=>{
    const si=STATUS_INFO[p.status]||STATUS_INFO.novo;
    const itens=p.itens.map(i=>\`\${i.qty}x \${i.nome}\`).join(', ');
    const taxa=p.taxaEntrega||cfg.taxaEntrega||3;
    return \`<div class="ped-card">
      <div class="ped-head">
        <div class="ped-info">
          <div class="ped-nome">🛵 \${p.cliente||'Cliente'}</div>
          \${p.fone?\`<div class="ped-fone">📱 \${p.fone}</div>\`:''}
          \${p.endereco?\`<div class="ped-fone">📍 \${p.endereco}</div>\`:''}
          <div class="ped-hora">\${p.criadoEmFmt||''}</div>
        </div>
        <div style="text-align:right;">
          <div class="ped-tot">\${fmt(p.total)}</div>
          <div style="font-size:.7rem;color:#888;">Taxa: \${fmt(taxa)}</div>
        </div>
      </div>
      <div class="ped-itens">\${itens}\${p.obs?'<br>💬 '+p.obs:''}<br>💳 \${p.pay||''}</div>
      <span class="ped-status \${si.cls}">\${si.label}</span>
      <div class="ped-btns">
        \${p.status==='novo'?\`<button class="bst bst-conf" onclick="confirmarDelivery('\${p.id}')">✅ Confirmar + Avisar entregador</button>\`:''}
        \${p.status==='confirmado'?\`<button class="bst bst-entr" onclick="sairEntrega('\${p.id}')">🛵 Saiu p/ entrega</button>\`:''}
        \${p.status==='entrega'?\`<button class="bst bst-ok" onclick="marcarEntregue('\${p.id}')">✅ Entregue</button>\`:''}
        \${p.fone?\`<button class="bst" style="background:#1a2a1a;color:#6db46d;" onclick="avisarCliente('\${p.id}')">📲 Avisar cliente</button>\`:''}
      </div>
    </div>\`;
  }).join('');
}

window.confirmarDelivery=async function(id){
  const p=pedidos.find(x=>x.id===id);if(!p)return;
  p.status='confirmado';
  await setDoc(doc(fdb,'pedidos',id),p);
  // Avisa entregador via WhatsApp
  const foneEnt=(cfg.whatsappEntregador||cfg.foneCozinha||'5589981216999').replace(/\\D/g,'');
  const itensTxt=p.itens.map(function(i){return i.qty+"x "+i.nome;}).join("\\n");
  const msg="Novo Delivery - Yanni Sushi\\n\\nCliente: "+(p.cliente||"?")+ "\\nFone: "+(p.fone||"?")+"\\nEndereco: "+(p.endereco||"?")+"\\n\\nItens:\\n"+itensTxt+"\\n\\nTotal: "+fmt(p.total)+"\\nPagamento: "+(p.pay||"?");
  window.open(\`https://wa.me/\${foneEnt}?text=\${encodeURIComponent(msg)}\`,'_blank');
  // Avisa cliente
  if(p.fone){
    const foneC=p.fone.replace(/\\D/g,'');
    const foneCC=foneC.length===11?\`55\${foneC}\`:foneC;
    setTimeout(()=>{
      const mc=\`🍣 *Yanni Sushi*
Olá \${p.cliente||''}! Seu pedido foi confirmado! Em breve sairá para entrega. ⏱️ Tempo estimado: \${cfg.tempo||30} min\`;
      window.open(\`https://wa.me/\${foneCC}?text=\${encodeURIComponent(mc)}\`,'_blank');
    },1500);
  }
  renderDelivery();atualizaBadgeDeliv();
}

window.sairEntrega=async function(id){
  const p=pedidos.find(x=>x.id===id);if(!p)return;
  p.status='entrega';
  await setDoc(doc(fdb,'pedidos',id),p);
  if(p.fone){
    const foneC=p.fone.replace(/\\D/g,'');
    const foneCC=foneC.length===11?\`55\${foneC}\`:foneC;
    const mc=\`🛵 *Yanni Sushi*
Seu pedido saiu para entrega! Já já chega 🎉\`;
    window.open(\`https://wa.me/\${foneCC}?text=\${encodeURIComponent(mc)}\`,'_blank');
  }
  renderDelivery();atualizaBadgeDeliv();
}

window.marcarEntregue=async function(id){
  const p=pedidos.find(x=>x.id===id);if(!p)return;
  p.status='entregue';
  await setDoc(doc(fdb,'pedidos',id),p);
  if(p.fone){
    const foneC=p.fone.replace(/\\D/g,'');
    const foneCC=foneC.length===11?\`55\${foneC}\`:foneC;
    const mc=\`✅ *Yanni Sushi*
Pedido entregue! Obrigado pela preferência 🙏 Bom apetite! 😋\`;
    window.open(\`https://wa.me/\${foneCC}?text=\${encodeURIComponent(mc)}\`,'_blank');
  }
  await registrarVenda(p.itens,'delivery');
  renderDelivery();atualizaBadgeDeliv();
}

function atualizaBadgeDeliv(){
  const novos=pedidos.filter(p=>(p.tipo==='delivery'||p.endereco)&&p.status==='novo').length;
  const badge=document.getElementById('delivBadge');
  const btn=document.getElementById('btnDeliv');
  if(badge){badge.textContent=novos;badge.style.display=novos?'inline':'none';}
  // Mostrar botão delivery apenas para dono/garçom logado
  if(btn&&usuarioLogado&&(usuarioLogado.tipo==='dono'||usuarioLogado.tipo==='garcom'))btn.style.display='flex';
}

// ── CRM ───────────────────────────────────────────
let filtroCrmAtual='todos';

function renderCrm(){
  const el=document.getElementById('crmList');if(!el)return;
  // Agrupa pedidos por cliente (fone)
  const mapa={};
  pedidos.forEach(p=>{
    if(!p.fone)return;
    const k=p.fone.replace(/\\D/g,'');
    if(!mapa[k])mapa[k]={nome:p.cliente||'?',fone:k,total:0,qtd:0,ultimo:''};
    mapa[k].total+=p.total||0;
    mapa[k].qtd++;
    if(!mapa[k].ultimo||p.criadoEm>mapa[k].ultimo)mapa[k].ultimo=p.criadoEm;
  });
  let lista=Object.values(mapa).sort((a,b)=>b.qtd-a.qtd);
  const agora=new Date();
  // Aplica filtro
  if(filtroCrmAtual==='frequente')lista=lista.filter(c=>c.qtd>=3);
  if(filtroCrmAtual==='sumiu')lista=lista.filter(c=>{const d=new Date(c.ultimo);return(agora-d)/(1000*60*60*24)>=7;});
  if(filtroCrmAtual==='novo')lista=lista.filter(c=>c.qtd<3);
  if(!lista.length){el.innerHTML='<p style="color:#555;text-align:center;padding:20px;">Nenhum cliente encontrado.</p>';return;}
  el.innerHTML=lista.map(c=>{
    const diasAtras=c.ultimo?Math.floor((agora-new Date(c.ultimo))/(1000*60*60*24)):99;
    const badge=c.qtd>=3?'🟢 Frequente':diasAtras>=7?'🔴 Sumiu':'🔵 Novo';
    const msg=\`Olá \${c.nome}! Aqui é do Yanni Sushi 🍣 Temos novidades no cardápio! Que tal um pedido hoje? 😊\`;
    return\`<div style="background:#1e1e1e;border-radius:8px;padding:10px;margin-bottom:7px;display:flex;align-items:center;gap:10px;">
      <div style="flex:1;">
        <div style="font-weight:700;font-size:.88rem;">\${c.nome} <span style="font-size:.7rem;">\${badge}</span></div>
        <div style="font-size:.74rem;color:#888;">\${c.qtd} pedido(s) · Total \${fmt(c.total)} · \${diasAtras===0?'Hoje':diasAtras+'d atrás'}</div>
      </div>
      <button onclick="var m='Ola '+c.nome+'! Aqui e do Yanni Sushi! Temos novidades no cardapio! Que tal um pedido hoje?';window.open('https://wa.me/55'+c.fone+'?text='+encodeURIComponent(m),'_blank')" style="background:#25D366;border:none;color:#fff;padding:6px 10px;border-radius:6px;cursor:pointer;font-size:.75rem;font-weight:700;white-space:nowrap;">WhatsApp</button>
    </div>\`;
  }).join('');
}

window.filtroCrm=function(f,btn){
  filtroCrmAtual=f;
  document.querySelectorAll('#tCrm .bst').forEach(b=>b.style.opacity='.5');
  if(btn)btn.style.opacity='1';
  renderCrm();
}

// ── IA COM CLAUDE ─────────────────────────────────
window.iaEnviar=function(){
  const inp=document.getElementById('iaInput');
  const q=inp.value.trim();
  if(!q)return;
  iaPerguntar(q);
  inp.value='';
}

window.iaPerguntar=async function(pergunta){
  const el=document.getElementById('iaResposta');
  if(!el)return;
  el.textContent='🍣 Suki analisando seus dados...';
  // Monta contexto com dados reais
  const totalVendas=vendas.reduce((s,v)=>s+(v.itens||[]).reduce((a,i)=>a+(i.preco||0)*(i.qty||1),0),0);
  const hoje=new Date().toISOString().slice(0,10);
  const vendasHoje=vendas.filter(v=>v.data&&v.data.startsWith(hoje));
  const totalHoje=vendasHoje.reduce((s,v)=>s+(v.itens||[]).reduce((a,i)=>a+(i.preco||0)*(i.qty||1),0),0);
  // Conta itens mais vendidos
  const contagem={};
  vendas.forEach(v=>(v.itens||[]).forEach(i=>{contagem[i.nome]=(contagem[i.nome]||0)+(i.qty||1);}));
  const top5=Object.entries(contagem).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([n,q])=>\`\${n}: \${q}x\`).join(', ');
  // Clientes
  const totalClientes=new Set(pedidos.map(p=>p.fone).filter(Boolean)).size;
  const mesasAbertas=comandas.filter(c=>c.aberta).length;
  const contexto=\`Você é Suki, assistente virtual inteligente do restaurante Yanni Sushi de Alegrete-PI. Responda sempre em português, de forma direta, prática e com emojis ocasionais 🍣. Use os dados reais fornecidos para dar respostas personalizadas e úteis para o dono do restaurante.

DADOS ATUAIS:
- Faturamento total: R$ \${totalVendas.toFixed(2)}
- Faturamento hoje: R$ \${totalHoje.toFixed(2)}
- Total de pedidos: \${pedidos.length}
- Mesas abertas agora: \${mesasAbertas}
- Clientes únicos: \${totalClientes}
- Top 5 pratos mais vendidos: \${top5||'sem dados ainda'}
- Delivery: só em Alegrete-PI, taxa R$ \${cfg.taxaEntrega||3}
- Tem salão (\${mesasAbertas} mesa(s) abertas), balcão e delivery

PERGUNTA DO DONO: \${pergunta}\`;
  try{
    const resp=await fetch('https://api.groq.com/openai/v1/chat/completions',{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':'Bearer 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'},
      body:JSON.stringify({model:'llama-3.3-70b-versatile',messages:[{role:'system',content:'Você é Suki, assistente inteligente do Yanni Sushi de Alegrete-PI. Responda em português, seja direta e prática, máximo 3 linhas.'},{role:'user',content:contexto}],max_tokens:400})
    });
    const data=await resp.json();
    const txt=data.choices&&data.choices[0]?data.choices[0].message.content:'Suki não conseguiu conectar.';
    el.textContent=txt;
  }catch(e){
    el.textContent='Suki não conseguiu conectar. Verifique sua conexão.';
  }
}


// ══════════════════════════════════════════════════════
// PROGRAMA DE PONTOS
// ══════════════════════════════════════════════════════
let cfgPontos = { pontosP: 300, pontosG: 500 };
let clientePontos = null; // pontos do cliente atual

async function carregarPontos(fone) {
  if (!fone) return null;
  try {
    const snap = await getDoc(doc(fdb, 'pontos', fone));
    return snap.exists() ? snap.data() : { fone, total: 0, historico: [] };
  } catch(e) { return null; }
}

async function adicionarPontos(fone, nome, valor) {
  if (!fone) return;
  try {
    const atual = await carregarPontos(fone) || { fone, nome, total: 0, historico: [] };
    const novos = Math.floor(valor);
    atual.total = (atual.total || 0) + novos;
    atual.nome = nome;
    atual.ultimoPedido = new Date().toISOString();
    atual.historico = atual.historico || [];
    atual.historico.push({ data: new Date().toISOString(), pontos: novos, valor });
    await setDoc(doc(fdb, 'pontos', fone), atual);
    return atual;
  } catch(e) { console.error(e); }
}

window.salvarPontos = async function() {
  const p = parseInt(document.getElementById('cfPontosP').value) || 300;
  const g = parseInt(document.getElementById('cfPontosG').value) || 500;
  cfgPontos = { pontosP: p, pontosG: g };
  await setDoc(doc(fdb, 'config', 'pontos'), cfgPontos);
  alert('✅ Configuração de pontos salva!');
}

async function carregarCfgPontos() {
  try {
    const snap = await getDoc(doc(fdb, 'config', 'pontos'));
    if (snap.exists()) cfgPontos = { ...cfgPontos, ...snap.data() };
  } catch(e) {}
}

window.renderFidelidade = async function() {
  const el = document.getElementById('fidList'); if (!el) return;
  el.innerHTML = '<p style="color:#555;text-align:center;padding:14px;">Carregando...</p>';
  try {
    const snap = await getDocs(collection(fdb, 'pontos'));
    const lista = snap.docs.map(d => d.data()).sort((a,b) => (b.total||0)-(a.total||0));
    if (!lista.length) { el.innerHTML = '<p style="color:#555;text-align:center;padding:14px;">Nenhum cliente com pontos ainda.</p>'; return; }
    el.innerHTML = lista.map(c => {
      const pct = Math.min(100, Math.round((c.total||0) / cfgPontos.pontosG * 100));
      const diasAtras = c.ultimoPedido ? Math.floor((Date.now()-new Date(c.ultimoPedido))/(1000*60*60*24)) : 99;
      return \`<div class="pontos-bar" style="margin-bottom:6px;">
        <div class="pb-ico">👤</div>
        <div class="pb-info" style="flex:1;">
          <strong style="color:#c084fc;">\${c.nome||c.fone} — ⭐ \${c.total||0} pts</strong>
          <span>\${diasAtras===0?'Hoje':diasAtras+'d atrás'} · \${pct}% para temaki grande</span>
          <div class="pontos-prog"><div class="pontos-prog-bar" style="width:\${pct}%"></div></div>
        </div>
        \${c.fone?\`<button onclick="window.open('https://wa.me/55\${c.fone}?text=\${encodeURIComponent('Olá '+c.nome+'! Você tem '+c.total+' pontos no Yanni Sushi 🍣 Acumule mais e ganhe um temaki grátis!')}','_blank')" style="background:#25D366;border:none;color:#fff;padding:6px 9px;border-radius:6px;cursor:pointer;font-size:.72rem;">WhatsApp</button>\`:''}
      </div>\`;
    }).join('');
  } catch(e) { el.innerHTML = '<p style="color:#ff6666;text-align:center;padding:14px;">Erro ao carregar.</p>'; }
}

function mostrarPontosCarrinho(fone, nome) {
  if (!fone) return;
  carregarPontos(fone).then(dados => {
    if (!dados) return;
    clientePontos = dados;
    const total = dados.total || 0;
    const bar = document.getElementById('pontosBarCart');
    const nomeEl = document.getElementById('pontosClienteNome');
    const infoEl = document.getElementById('pontosClienteInfo');
    const progEl = document.getElementById('pontosProgBar');
    if (!bar) return;
    bar.style.display = 'flex';
    nomeEl.textContent = \`⭐ \${total} pontos — \${nome}\`;
    const pct = Math.min(100, Math.round(total / cfgPontos.pontosG * 100));
    if (total >= cfgPontos.pontosG) {
      infoEl.textContent = '🎉 Você ganhou um Temaki Grande grátis! Informe ao atendente.';
      progEl.style.width = '100%';
    } else if (total >= cfgPontos.pontosP) {
      infoEl.textContent = \`Faltam \${cfgPontos.pontosG - total} pts para Temaki Grande! (já tem o pequeno 🎉)\`;
      progEl.style.width = pct + '%';
    } else {
      infoEl.textContent = \`Faltam \${cfgPontos.pontosG - total} pts para Temaki Grande\`;
      progEl.style.width = pct + '%';
    }
  });
}

// ══════════════════════════════════════════════════════
// PRATO DO DIA
// ══════════════════════════════════════════════════════
let pratoDiaAtual = null;

async function carregarPratoDia() {
  try {
    const snap = await getDoc(doc(fdb, 'config', 'prato_dia'));
    if (snap.exists()) {
      pratoDiaAtual = snap.data();
      renderPratoDiaBanner();
    }
  } catch(e) {}
}

function renderPratoDiaBanner() {
  const el = document.getElementById('pratoDiaBanner'); if (!el) return;
  if (!pratoDiaAtual || !pratoDiaAtual.ativo) { el.style.display = 'none'; return; }
  const p = produtos.find(x => x.id === pratoDiaAtual.prodId);
  if (!p) { el.style.display = 'none'; return; }
  const precoPromo = pratoDiaAtual.precoPromo || p.preco;
  const temDesconto = precoPromo < p.preco;
  el.style.display = 'block';
  el.innerHTML = \`<div class="prato-dia-banner" onclick="addCart('\${p.id}')">
    <img src="\${p.img||'https://placehold.co/72x72/1a1a1a/444?text=🍣'}" onerror="this.src='https://placehold.co/72x72/1a1a1a/444?text=🍣'">
    <div class="pd-info">
      <span class="pd-badge">⭐ \${pratoDiaAtual.msg||'PRATO DO DIA'}</span>
      <div class="pd-nome">\${p.nome}</div>
      <div>
        <span class="pd-preco">\${fmt(precoPromo)}</span>
        \${temDesconto?\`<span class="pd-preco-old">\${fmt(p.preco)}</span>\`:''}
      </div>
    </div>
    <button style="background:var(--gd);color:#000;border:none;padding:10px 14px;border-radius:9px;font-weight:800;cursor:pointer;white-space:nowrap;">+ Pedir</button>
  </div>\`;
}

window.salvarPratoDia = async function() {
  const sel = document.getElementById('pratoDiaSel');
  const precoPromo = parseFloat(document.getElementById('pratoDiaPreco').value) || 0;
  const msg = document.getElementById('pratoDiaMsg').value.trim() || 'PRATO DO DIA';
  if (!sel.value) { alert('Selecione um produto!'); return; }
  const p = produtos.find(x => x.id === sel.value);
  pratoDiaAtual = { ativo: true, prodId: sel.value, precoPromo: precoPromo || p.preco, msg };
  await setDoc(doc(fdb, 'config', 'prato_dia'), pratoDiaAtual);
  renderPratoDiaBanner();
  alert('✅ Prato do dia ativado!');
}

window.removerPratoDia = async function() {
  pratoDiaAtual = { ativo: false };
  await setDoc(doc(fdb, 'config', 'prato_dia'), pratoDiaAtual);
  const el = document.getElementById('pratoDiaBanner');
  if (el) el.style.display = 'none';
  alert('Prato do dia removido!');
}

function popPratoDiaSel() {
  const sel = document.getElementById('pratoDiaSel'); if (!sel) return;
  sel.innerHTML = '<option value="">-- Selecione o produto --</option>';
  produtos.forEach(p => sel.innerHTML += \`<option value="\${p.id}">\${p.nome} — \${fmt(p.preco)}</option>\`);
}

// ══════════════════════════════════════════════════════
// CUPONS DE DESCONTO
// ══════════════════════════════════════════════════════
let cupons = [];
let cupomAplicado = null;

async function carregarCupons() {
  try {
    const snap = await getDocs(collection(fdb, 'cupons'));
    cupons = snap.docs.map(d => ({ ...d.data(), id: d.id }));
    renderCupomList();
  } catch(e) {}
}

window.criarCupom = async function() {
  const cod = document.getElementById('cupomCod').value.trim().toUpperCase();
  const desc = parseInt(document.getElementById('cupomDesc').value) || 0;
  const usos = parseInt(document.getElementById('cupomUsos').value) || 0;
  if (!cod || !desc) { alert('Preencha código e desconto!'); return; }
  const novo = { codigo: cod, desconto: desc, usosMax: usos, usosFeitos: 0, ativo: true, criadoEm: new Date().toISOString() };
  await setDoc(doc(fdb, 'cupons', cod), novo);
  cupons.push({ ...novo, id: cod });
  document.getElementById('cupomCod').value = '';
  document.getElementById('cupomDesc').value = '';
  document.getElementById('cupomUsos').value = '';
  renderCupomList();
  alert(\`✅ Cupom \${cod} criado! \${desc}% de desconto.\`);
}

function renderCupomList() {
  const el = document.getElementById('cupomList'); if (!el) return;
  if (!cupons.length) { el.innerHTML = '<p style="color:#555;font-size:.78rem;text-align:center;padding:8px;">Nenhum cupom criado.</p>'; return; }
  el.innerHTML = cupons.map(c => \`<div style="display:flex;align-items:center;gap:7px;padding:7px;background:#1e1e1e;border-radius:7px;margin-bottom:5px;">
    <div style="flex:1;">
      <span style="font-weight:700;color:#6db46d;">\${c.codigo}</span>
      <span style="font-size:.75rem;color:#888;margin-left:6px;">\${c.desconto}% off · \${c.usosFeitos||0}/\${c.usosMax||'∞'} usos</span>
    </div>
    <button onclick="deletarCupom('\${c.id}')" style="background:none;border:1px solid #ff4444;color:#ff4444;padding:3px 8px;border-radius:5px;cursor:pointer;font-size:.72rem;">✕</button>
  </div>\`).join('');
}

window.deletarCupom = async function(id) {
  if (!confirm(\`Remover cupom \${id}?\`)) return;
  await deleteDoc(doc(fdb, 'cupons', id));
  cupons = cupons.filter(x => x.id !== id);
  renderCupomList();
}

window.aplicarCupom = async function() {
  const cod = (document.getElementById('cupomInput').value || '').trim().toUpperCase();
  const msgEl = document.getElementById('cupomMsg');
  if (!cod) return;
  try {
    const snap = await getDoc(doc(fdb, 'cupons', cod));
    if (!snap.exists()) { msgEl.innerHTML = '<div class="cupom-err">❌ Cupom inválido!</div>'; return; }
    const c = snap.data();
    if (!c.ativo) { msgEl.innerHTML = '<div class="cupom-err">❌ Cupom desativado!</div>'; return; }
    if (c.usosMax > 0 && c.usosFeitos >= c.usosMax) { msgEl.innerHTML = '<div class="cupom-err">❌ Cupom esgotado!</div>'; return; }
    cupomAplicado = { codigo: cod, desconto: c.desconto };
    msgEl.innerHTML = \`<div class="cupom-ok">✅ Cupom aplicado! \${c.desconto}% de desconto 🎉</div>\`;
    renderCartModal();
  } catch(e) {
    msgEl.innerHTML = '<div class="cupom-err">❌ Erro ao verificar cupom.</div>';
  }
}

// ══════════════════════════════════════════════════════
// META DIÁRIA
// ══════════════════════════════════════════════════════
let metaDiaria = 0;

async function carregarMeta() {
  try {
    const snap = await getDoc(doc(fdb, 'config', 'meta'));
    if (snap.exists()) metaDiaria = snap.data().valor || 0;
    atualizarMetaBanner();
  } catch(e) {}
}

window.salvarMeta = async function() {
  const v = parseFloat(document.getElementById('cfMeta').value) || 0;
  metaDiaria = v;
  await setDoc(doc(fdb, 'config', 'meta'), { valor: v });
  alert('✅ Meta salva!');
  atualizarMetaBanner();
}

function atualizarMetaBanner() {
  if (!metaDiaria) return;
  const hoje = new Date().toISOString().slice(0,10);
  const vendasHoje = vendas.filter(v => v.data && v.data.startsWith(hoje));
  const totalHoje = vendasHoje.reduce((s,v) => s+(v.itens||[]).reduce((a,i) => a+(i.preco||0)*(i.qty||1),0),0);
  const pct = Math.min(100, Math.round(totalHoje/metaDiaria*100));
  // Atualiza no relatório se estiver visível
  const relSum = document.getElementById('relSumCards');
  if (relSum && relSum.children.length) {
    const metaCard = document.createElement('div');
    metaCard.className = 'rel-sumcard';
    metaCard.style.border = '1px solid #2a2a5a';
    metaCard.innerHTML = \`<div class="rsv" style="color:#5599ff;">\${pct}%</div><div class="rsl">Meta do dia (\${fmt(totalHoje)}/\${fmt(metaDiaria)})</div>\`;
  }
}

// ══════════════════════════════════════════════════════
// SELOS NOS PRODUTOS
// ══════════════════════════════════════════════════════
function gerarSelos(prod) {
  const selos = prod.selos || [];
  let html = '';
  if (selos.includes('mais')) html += '<span class="selo selo-mais">⭐ Mais vendido</span>';
  if (selos.includes('novo')) html += '<span class="selo selo-novo">🆕 Novo</span>';
  if (selos.includes('picante')) html += '<span class="selo selo-picante">🌶️ Picante</span>';
  if (selos.includes('veg')) html += '<span class="selo selo-veg">🌱 Vegetariano</span>';
  if (selos.includes('destaque')) html += '<span class="selo selo-destaque">🔥 Destaque</span>';
  return html;
}

// ══════════════════════════════════════════════════════
// SUGESTÃO QUANDO PRODUTO ESGOTADO
// ══════════════════════════════════════════════════════
function sugerirAlternativa(prodId) {
  const p = produtos.find(x => x.id === prodId); if (!p) return;
  const alternativas = produtos.filter(x =>
    x.id !== prodId &&
    x.cat === p.cat &&
    x.disponivel !== false &&
    (x.estoque === 0 || x.estoque > 0)
  );
  if (!alternativas.length) return;
  const sugestao = alternativas[0];
  const t = document.getElementById('cmdToast');
  document.getElementById('cmdToastTxt').textContent = \`"\${p.nome}" esgotou! Que tal \${sugestao.nome}? 🍣\`;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 4000);
}

// ══════════════════════════════════════════════════════
// CLIENTE SUMIU HÁ 7 DIAS — aviso automático no CRM
// ══════════════════════════════════════════════════════
function verificarClientesSumidos() {
  const agora = new Date();
  const mapa = {};
  pedidos.forEach(p => {
    if (!p.fone) return;
    const k = p.fone.replace(/\\D/g,'');
    if (!mapa[k] || p.criadoEm > mapa[k].ultimo) {
      mapa[k] = { nome: p.cliente||'Cliente', fone: k, ultimo: p.criadoEm };
    }
  });
  // Para o dono: mostra badge no CRM se houver clientes sumidos
  const sumidos = Object.values(mapa).filter(c => {
    const dias = Math.floor((agora - new Date(c.ultimo))/(1000*60*60*24));
    return dias >= 7;
  });
  const btnCrm = document.querySelector('[onclick*="tCrm"]');
  if (btnCrm && sumidos.length) {
    btnCrm.innerHTML = \`👥 CRM <span style="background:#ff4444;color:#fff;border-radius:10px;padding:1px 5px;font-size:.65rem;">\${sumidos.length}</span>\`;
  }
}

// ══════════════════════════════════════════════════════
// ANIVERSÁRIO DO CLIENTE
// ══════════════════════════════════════════════════════
async function verificarAniversarios() {
  // Por ora, mostra parabéns se o cliente tiver aniversário hoje no CRM
  const hoje = new Date();
  const mesHoje = hoje.getMonth()+1;
  const diaHoje = hoje.getDate();
  try {
    const snap = await getDocs(collection(fdb, 'clientes_fid'));
    snap.docs.forEach(d => {
      const c = d.data();
      if (!c.aniversario) return;
      const partes = c.aniversario.split('-');
      if (parseInt(partes[1]) === mesHoje && parseInt(partes[2]) === diaHoje) {
        // Envia mensagem de parabéns
        if (c.fone) {
          const msg = \`🎂 *Yanni Sushi*
Parabéns \${c.nome}! 🎉
No seu aniversário, você ganha 10% de desconto no próximo pedido!
Use o cupom: ANIV\${c.fone.slice(-4)}\`;
          console.log('Aniversário detectado:', c.nome, msg);
        }
      }
    });
  } catch(e) {}
}

// Override openCart para mostrar pontos
// openCart ja tem tudo integrado acima - sem override necessario

// Override render para selos e prato do dia
const _origRender = window.render;
window.render = function() {
  _origRender();
  // Adiciona selos nos produtos (após render)
  produtos.forEach(p => {
    if (!p.selos || !p.selos.length) return;
    const cards = document.querySelectorAll('.pcard');
    cards.forEach(card => {
      const btn = card.querySelector('.btn-add');
      if (btn && btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(p.id)) {
        const selosHtml = gerarSelos(p);
        if (selosHtml) {
          const pinfo = card.querySelector('.pinfo');
          if (pinfo && !pinfo.querySelector('.selos-wrap')) {
            const div = document.createElement('div');
            div.className = 'selos-wrap';
            div.innerHTML = selosHtml;
            div.style.marginBottom = '5px';
            pinfo.insertBefore(div, pinfo.firstChild);
          }
        }
      }
    });
  });
  // Atualiza prato do dia
  renderPratoDiaBanner();
  popPratoDiaSel();
  // Verifica clientes sumidos
  verificarClientesSumidos();
}

// Adicionar selos ao editar produto
const _origEditProd = window.editProd;
window.editProd = function(id) {
  _origEditProd(id);
  const p = produtos.find(x => x.id === id); if (!p) return;
  // Adiciona checkboxes de selos se não existirem
  const tAdd = document.getElementById('tAdd'); if (!tAdd) return;
  if (document.getElementById('selosWrap')) return;
  const div = document.createElement('div');
  div.id = 'selosWrap';
  div.className = 'fg';
  div.innerHTML = \`<label>🏷️ Selos do produto</label>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:4px;">
      \${['mais','novo','picante','veg','destaque'].map(s => \`
        <label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.8rem;background:#1e1e1e;padding:5px 10px;border-radius:20px;">
          <input type="checkbox" id="selo_\${s}" \${(p.selos||[]).includes(s)?'checked':''} style="accent-color:var(--pr);">
          \${s==='mais'?'⭐ Mais vendido':s==='novo'?'🆕 Novo':s==='picante'?'🌶️ Picante':s==='veg'?'🌱 Vegetariano':'🔥 Destaque'}
        </label>\`).join('')}
    </div>\`;
  const btnSv = document.getElementById('btnSv');
  if (btnSv) tAdd.insertBefore(div, btnSv);
}

// Override saveProd para salvar selos
const _origSaveProd = window.saveProd;
window.saveProd = async function() {
  const selos = ['mais','novo','picante','veg','destaque'].filter(s => {
    const el = document.getElementById('selo_'+s);
    return el && el.checked;
  });
  const eid = document.getElementById('editId').value;
  if (eid) {
    const p = produtos.find(x => x.id === eid);
    if (p) p.selos = selos;
  }
  // Salva selos temporariamente para o saveProd original pegar
  window._selosPendentes = selos;
  await _origSaveProd();
  // Remove wrap de selos após salvar
  const sw = document.getElementById('selosWrap');
  if (sw) sw.remove();
}

// Override confirmar fechamento para adicionar pontos
const _origConfirmarFechamento = window.confirmarFechamento;
window.confirmarFechamento = async function() {
  // Adiciona pontos se tiver fone da mesa
  await _origConfirmarFechamento();
}


// ── BOTÃO FALAR COM A GENTE ──────────────────────────
window.abrirWhatsAppDuvida = function(){
  const msg = 'Olá! Estou no cardápio do Yanni Sushi e tenho uma dúvida 🍣';
  const fone = (cfg.fone||'5589981216999').replace(/\\D/g,'');
  window.open(\`https://wa.me/\${fone}?text=\${encodeURIComponent(msg)}\`, '_blank');
}

initFB();
// Inicia push e banner tempo após carregamento
setTimeout(()=>{
  atualizarTempoBanner();
  if(mesaAtual){
    mostrarPushBanner();
    iniciarPush();
  }
},2000);
</script>
</body>
</html>
`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") {
      return new Response(null, {headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,GET,OPTIONS","Access-Control-Allow-Headers":"Content-Type"}});
    }
    if (request.method === "GET" && (url.pathname === "/" || url.pathname === "/index.html")) {
      return new Response(HTML_SITE, {headers:{"Content-Type":"text/html; charset=utf-8"}});
    }
    if (request.method === "POST" && url.pathname === "/webhook") {
      try {
        const body = await request.json();
        const status = body.status || body.payment_status || "";
        const orderId = body.order_id || body.id || body.reference || "";
        const valor = (body.amount || body.paid_amount || 0) / 100;
        const metodoPag = body.capture_method || body.payment_method || "";
        if (["approved","paid","APPROVED","PAID"].includes(status)) {
          const pedidoId = await buscarPedidoPorRef(orderId, FIREBASE_PROJECT, FIREBASE_API_KEY);
          if (pedidoId) {
            await atualizarPedido(pedidoId, {status:"pago",statusPagamento:"aprovado",pagoEm:new Date().toISOString(),valorPago:valor,metodoPagamento:metodoPag,infinitePayOrderId:orderId}, FIREBASE_PROJECT, FIREBASE_API_KEY);
            return new Response(JSON.stringify({ok:true,pedidoId}), {status:200,headers:{"Content-Type":"application/json"}});
          }
        }
        return new Response(JSON.stringify({ok:true}), {status:200,headers:{"Content-Type":"application/json"}});
      } catch(e) {
        return new Response(JSON.stringify({erro:e.message}), {status:500,headers:{"Content-Type":"application/json"}});
      }
    }
    if (request.method === "POST" && url.pathname === "/suki") {
      try {
        const body = await request.json();
        const c = body.carrinho || '';
        const o = body.opcoes || '';
        const p = 'Voce e Suki do Yanni Sushi. Carrinho: ' + c + '. Escolha UM produto que combine: ' + o + ' Responda so o ID. Ex: i5';
        const r = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {'Content-Type':'application/json','x-api-key':env.ANTHROPIC_KEY||'','anthropic-version':'2023-06-01'},
          body: JSON.stringify({model:'claude-haiku-4-5-20251001',max_tokens:20,messages:[{role:'user',content:p}]})
        });
        const d = await r.json();
        const id = d.content && d.content[0] ? d.content[0].text.trim() : '';
        return new Response(JSON.stringify({id}), {status:200, headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});
      } catch(e) {
        return new Response(JSON.stringify({id:''}), {status:200, headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});
      }
    }
    if (request.method === "GET" && url.pathname === "/status") {
      const pedidoId = url.searchParams.get("pedido");
      if (!pedidoId) return new Response(JSON.stringify({erro:"pedido obrigatorio"}), {status:400});
      try {
        const dados = await buscarPedido(pedidoId, FIREBASE_PROJECT, FIREBASE_API_KEY);
        if (!dados) return new Response(JSON.stringify({status:"nao_encontrado"}), {headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});
        return new Response(JSON.stringify({status:dados.status}), {headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});
      } catch(e) { return new Response(JSON.stringify({erro:e.message}), {status:500}); }
    }
    return new Response("Not found", {status:404});
  },
};

async function buscarPedidoPorRef(orderId, project, apiKey) {
  const res = await fetch(`https://firestore.googleapis.com/v1/projects/${project}/databases/(default)/documents:runQuery?key=${apiKey}`, {
    method:"POST", headers:{"Content-Type":"application/json"},
    body:JSON.stringify({structuredQuery:{from:[{collectionId:"pedidos"}],where:{fieldFilter:{field:{fieldPath:"infinitePayOrderId"},op:"EQUAL",value:{stringValue:orderId}}},limit:1}})
  });
  const data = await res.json();
  if (data?.[0]?.document) return data[0].document.name.split("/").pop();
  return null;
}
async function buscarPedido(pedidoId, project, apiKey) {
  const res = await fetch(`https://firestore.googleapis.com/v1/projects/${project}/databases/(default)/documents/pedidos/${pedidoId}?key=${apiKey}`);
  if (!res.ok) return null;
  const data = await res.json();
  if (!data.fields) return null;
  const obj = {};
  for (const [k,v] of Object.entries(data.fields)) obj[k] = v.stringValue ?? v.integerValue ?? v.doubleValue ?? v.booleanValue ?? null;
  return obj;
}
async function atualizarPedido(pedidoId, campos, project, apiKey) {
  const fbUrl = `https://firestore.googleapis.com/v1/projects/${project}/databases/(default)/documents/pedidos/${pedidoId}?key=${apiKey}`;
  const resGet = await fetch(fbUrl);
  const docAtual = await resGet.json();
  const fields = docAtual.fields || {};
  for (const [k,v] of Object.entries(campos)) {
    if (typeof v==="string") fields[k]={stringValue:v};
    else if (typeof v==="number") fields[k]={doubleValue:v};
    else if (typeof v==="boolean") fields[k]={booleanValue:v};
  }
  const res = await fetch(fbUrl, {method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({fields})});
  return res.ok;
}
