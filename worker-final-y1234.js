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
.pimg{width:100%;height:148px;object-fit:cover;background:#1a1a1a;display:block;}
.pinfo{padding:11px 13px 13px;}
.pname{font-weight:700;font-size:.93rem;margin-bottom:2px;}
.pdesc{font-size:.75rem;color:var(--mt);margin-bottom:9px;min-height:16px;}
.pfoot{display:flex;justify-content:space-between;align-items:center;}
.ppreco{font-weight:700;color:var(--pr);font-size:1.05rem;}
.btn-add{background:var(--pr);color:#fff;border:none;padding:7px 12px;border-radius:7px;cursor:pointer;font-weight:700;font-size:.8rem;}
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
.bpr{width:100%;padding:11px;background:var(--pr);color:#fff;border:none;border-radius:7px;font-weight:700;font-size:.95rem;cursor:pointer;margin-top:4px;}
.bsc{width:100%;padding:9px;background:#2a2a2a;color:#fff;border:none;border-radius:7px;cursor:pointer;margin-top:7px;font-size:.88rem;}
.bgn{width:100%;padding:11px;background:var(--gn);color:#fff;border:none;border-radius:7px;font-weight:700;font-size:.95rem;cursor:pointer;margin-top:4px;}
.mok{color:var(--gn);font-size:.8rem;margin-top:6px;text-align:center;display:none;}
.apl{max-height:330px;overflow-y:auto;}
.api{display:flex;align-items:center;gap:9px;padding:8px;background:#1e1e1e;border-radius:7px;margin-bottom:6px;}
.api img{width:44px;height:44px;object-fit:cover;border-radius:5px;flex-shrink:0;}
.cir{display:flex;align-items:center;gap:9px;padding:8px 0;border-bottom:1px solid #222;}
.cin{flex:1;font-size:.88rem;}
.cip{color:var(--pr);font-weight:700;font-size:.85rem;white-space:nowrap;}
.qc{display:flex;align-items:center;gap:5px;}
.qc button{background:#2a2a2a;border:none;color:#fff;width:25px;height:25px;border-radius:50%;cursor:pointer;font-size:.95rem;}
.ctrow{display:flex;justify-content:space-between;padding:11px 0 4px;font-weight:700;font-size:1.05rem;}
.popt{display:flex;align-items:center;gap:11px;padding:11px;background:#1e1e1e;border-radius:8px;margin-bottom:7px;cursor:pointer;border:2px solid transparent;transition:.14s;}
.popt:hover,.popt.on{border-color:var(--pr);}
.pico{font-size:1.4rem;width:34px;text-align:center;}
.pinf strong{display:block;font-size:.88rem;}
.pinf span{font-size:.73rem;color:#888;}
.pdet{background:#111;border-radius:8px;padding:14px;margin-top:8px;display:none;}
.pix-chave{color:var(--gd);font-weight:700;font-size:.95rem;margin-top:6px;word-break:break-all;}
.obs-box{background:#0d1a0d;border:1px solid #1e3a1e;border-radius:8px;padding:11px;margin:12px 0;}
.obs-box label{font-size:.78rem;color:#6db46d;display:block;margin-bottom:5px;}
.obs-box textarea{width:100%;background:#111;border:1px solid #2a2a2a;color:#fff;border-radius:6px;padding:8px;font-size:.83rem;resize:vertical;min-height:58px;}
.ped-card{background:#1a1a1a;border:1px solid #2a2a2a;border-radius:10px;padding:12px;margin-bottom:10px;}
.ped-head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;gap:8px;}
.ped-nome{font-weight:700;font-size:.92rem;}
.ped-fone{font-size:.75rem;color:#888;margin-top:1px;}
.ped-tot{color:var(--pr);font-weight:700;font-size:.92rem;white-space:nowrap;}
.ped-itens{font-size:.78rem;color:#888;margin-bottom:9px;line-height:1.7;}
.ped-status{display:inline-block;padding:3px 10px;border-radius:20px;font-size:.7rem;font-weight:700;margin-bottom:8px;}
.st-novo{background:#1a2a3a;color:#5599ff;}
.st-confirmado{background:#1a2a1a;color:#6db46d;}
.st-preparo{background:#2a1a00;color:#f4a430;}
.st-entrega{background:#1a1a2a;color:#a78bfa;}
.st-entregue{background:#1a2a1a;color:#4caf50;}
.ped-btns{display:flex;gap:5px;flex-wrap:wrap;}
.bst{border:none;padding:6px 10px;border-radius:6px;cursor:pointer;font-size:.72rem;font-weight:700;}
.bst-conf{background:#1e3a1e;color:#6db46d;}
.bst-prep{background:#2a1e00;color:#f4a430;}
.bst-entr{background:#1e1e3a;color:#a78bfa;}
.bst-ok{background:#1e3a1e;color:#4caf50;}
.mesa-card{background:#1e1e1e;border-radius:10px;padding:10px;text-align:center;cursor:pointer;border:2px solid transparent;transition:.15s;}
.mesa-card.livre{border-color:#333;}
.mesa-card.ocupada{border-color:#e63946;background:#1a0a0a;}
.mesa-card.selecionada{border-color:var(--pr);box-shadow:0 0 12px rgba(230,57,70,.4);}
.mesa-num{font-size:1.1rem;font-weight:700;margin-bottom:3px;}
.mesa-tot{font-size:.72rem;color:var(--pr);font-weight:700;margin-top:2px;}
.cmd-item-row{display:flex;align-items:center;gap:6px;padding:9px 0;border-bottom:1px solid #1e1e1e;}
.cmd-item-row .cin{flex:1;font-size:.85rem;}
.cmd-item-row .cip{color:var(--pr);font-weight:700;font-size:.84rem;white-space:nowrap;min-width:58px;text-align:right;}
.iqc{display:flex;align-items:center;gap:3px;background:#111;border-radius:30px;padding:2px 4px;border:1px solid #2a2a2a;}
.iqc button{width:26px;height:26px;border-radius:50%;border:none;cursor:pointer;font-size:1rem;font-weight:800;display:flex;align-items:center;justify-content:center;}
.iqc .iqc-minus{background:#1e1e1e;color:#ff5555;}
.iqc .iqc-plus{background:var(--pr);color:#fff;}
.iqc .iqc-num{min-width:24px;text-align:center;font-size:.92rem;font-weight:800;color:#fff;}
.qty-wrap{display:none;position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:3500;align-items:flex-end;justify-content:center;}
.qty-wrap.open{display:flex;}
.qty-box{background:#161616;border:2px solid var(--pr);border-radius:20px 20px 0 0;padding:22px 20px 32px;width:100%;max-width:460px;}
.qty-big{display:flex;align-items:center;justify-content:center;gap:20px;margin-bottom:14px;}
.qty-big button{width:46px;height:46px;border-radius:50%;border:none;cursor:pointer;font-size:1.6rem;font-weight:800;display:flex;align-items:center;justify-content:center;}
.qty-big .qb-minus{background:#1e1e1e;color:#ff5555;}
.qty-big .qb-plus{background:var(--pr);color:#fff;}
.qty-big .qb-n{font-size:2.2rem;font-weight:900;min-width:46px;text-align:center;}
.cmd-toast{position:fixed;bottom:85px;left:50%;transform:translateX(-50%);background:#111;border:1px solid var(--gn);color:#fff;padding:9px 20px;border-radius:30px;font-size:.85rem;font-weight:700;z-index:6000;opacity:0;transition:opacity .28s;pointer-events:none;}
.cmd-toast.show{opacity:1;}
.rel-sumcards{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:14px;}
.rel-sumcard{background:#1e1e1e;border-radius:8px;padding:10px 12px;text-align:center;}
.rel-sumcard .rsv{font-size:1rem;font-weight:700;color:var(--pr);}
.rel-sumcard .rsl{font-size:.7rem;color:#888;margin-top:2px;}
.rel-item{background:#1e1e1e;border-radius:7px;padding:9px 12px;margin-bottom:6px;display:flex;justify-content:space-between;align-items:center;}
.rel-total{background:#1a1a1a;border:1px solid var(--pr);border-radius:8px;padding:13px 16px;margin-top:10px;display:flex;justify-content:space-between;align-items:center;}
.pontos-bar{background:linear-gradient(135deg,#1a0a2a,#2a1a4a);border:1px solid #6a3aaa;border-radius:12px;padding:11px 14px;margin-bottom:10px;display:flex;align-items:center;gap:10px;}
.pontos-prog{height:7px;background:#2a1a4a;border-radius:4px;margin-top:5px;overflow:hidden;}
.pontos-prog-bar{height:100%;background:linear-gradient(90deg,#7c3aed,#c084fc);border-radius:4px;transition:.4s;}
.cupom-box{background:#0a1a0a;border:1px dashed #2e7d32;border-radius:8px;padding:10px 12px;margin-bottom:10px;display:flex;gap:7px;align-items:center;}
.cupom-box input{flex:1;background:#111;border:1px solid #2a2a2a;color:#fff;padding:8px 10px;border-radius:6px;font-size:.85rem;text-transform:uppercase;}
.cupom-box button{background:#2e7d32;color:#fff;border:none;padding:8px 13px;border-radius:6px;font-weight:700;cursor:pointer;}
.upsell-bar{position:fixed;bottom:75px;left:50%;transform:translateX(-50%);width:92%;max-width:480px;background:#1a1a1a;border:1px solid var(--gd);border-radius:14px;padding:10px 14px;z-index:895;display:none;}
.upsell-bar.show{display:flex;align-items:center;gap:10px;}
.tempo-banner{background:#1a1a0a;border-bottom:1px solid #2a2a00;padding:6px 16px;text-align:center;font-size:.78rem;color:var(--gd);display:flex;align-items:center;justify-content:center;gap:6px;}
.kds-toggle-row{display:flex;align-items:center;justify-content:space-between;background:#1a1a1a;border-radius:8px;padding:10px 12px;margin-bottom:10px;}
.toggle-sw{position:relative;width:44px;height:24px;cursor:pointer;}
.toggle-sw input{opacity:0;width:0;height:0;}
.toggle-sl{position:absolute;inset:0;background:#333;border-radius:12px;transition:.2s;}
.toggle-sl:before{content:'';position:absolute;width:18px;height:18px;left:3px;bottom:3px;background:#fff;border-radius:50%;transition:.2s;}
.toggle-sw input:checked+.toggle-sl{background:var(--gn);}
.toggle-sw input:checked+.toggle-sl:before{transform:translateX(20px);}
@keyframes pulse{0%,100%{opacity:.3;transform:scale(.8);}50%{opacity:1;transform:scale(1.2);}}
@media print{header,.cbar,.ov,.cat-bar{display:none!important;}body{background:#fff;color:#000;}}
</style>
</head>
<body>
<header>
  <div class="logo">
    <div style="width:52px;height:52px;">
      <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="28" cy="34" rx="14" ry="11" fill="white"/>
        <circle cx="28" cy="30" r="8" fill="#e63946"/>
        <circle cx="28" cy="30" r="3.5" fill="#111"/>
        <line x1="10" y1="56" x2="40" y2="4" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="17" y1="58" x2="52" y2="8" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="logo-txt">
      <span class="ln1">🍣 YANNI</span>
      <span class="ln2">SUSHI E RESTAURANTE · ALEGRETE PI</span>
    </div>
  </div>
  <div class="hbtns">
    <span><span class="sync-dot off" id="syncDot"></span></span>
    <button class="hbtn" id="btnCmd" onclick="openComandas()">🪙 Comandas</button>
    <button class="hbtn" id="btnPed" onclick="openPedidos()" style="background:#222;border:1px solid var(--pr);color:var(--pr);">📋 Pedidos <span id="pedBadge" style="background:var(--pr);color:#fff;border-radius:10px;padding:1px 6px;font-size:.7rem;display:none;">0</span></button>
    <button class="admin-ico" onclick="checkAdmin()" title="Admin">⚙️</button>
  </div>
</header>
<div class="cat-bar"><div class="cat-bar-inner" id="catBar"></div></div>
<div class="tempo-banner" id="tempoBanner" style="display:none;">⏱️ Tempo estimado: <strong id="tempoValor">30 min</strong></div>
<div id="pratoDiaBanner" style="display:none;padding:10px 16px 0;max-width:1100px;margin:0 auto;"></div>
<div class="wrap" id="menuWrap"><p style="text-align:center;color:#555;margin-top:50px;">Carregando...</p></div>
<div class="cbar" id="cbar" onclick="openCart()">
  <span>🛒 Ver Pedido &nbsp;<span id="cbarCnt" style="background:rgba(0,0,0,.25);padding:2px 8px;border-radius:20px;">0</span></span>
  <span id="cbarTot">R$ 0,00</span>
</div>
<div id="btnFalarWpp" style="position:fixed;bottom:90px;left:18px;z-index:890;">
  <button onclick="abrirWhatsAppDuvida()" style="background:#25D366;color:#fff;border:none;padding:11px 16px;border-radius:50px;font-weight:700;font-size:.82rem;cursor:pointer;box-shadow:0 3px 15px rgba(37,211,102,.5);display:flex;align-items:center;gap:7px;"><span>💬</span> Falar com a gente</button>
</div>

<!-- CART -->
<div class="ov" id="ovCart"><div class="box">
  <h2>🛒 Seu Pedido</h2>
  <div id="cartList"></div>
  <p style="font-size:.8rem;color:#888;margin:10px 0 7px;">📍 Como quer receber?</p>
  <div style="display:flex;gap:7px;margin-bottom:12px;">
    <div id="tipoDel" onclick="selTipo('delivery')" style="flex:1;padding:10px;background:#1e1e1e;border:2px solid #333;border-radius:8px;cursor:pointer;text-align:center;">
      <div style="font-size:1.3rem;">🏠</div><div style="font-size:.78rem;font-weight:700;margin-top:3px;">Delivery</div><div style="font-size:.65rem;color:#888;">+R$ 3,00</div>
    </div>
    <div id="tipoRet" onclick="selTipo('retirada')" style="flex:1;padding:10px;background:#1e1e1e;border:2px solid #333;border-radius:8px;cursor:pointer;text-align:center;">
      <div style="font-size:1.3rem;">🏪</div><div style="font-size:.78rem;font-weight:700;margin-top:3px;">Retirada</div><div style="font-size:.65rem;color:#888;">No restaurante</div>
    </div>
  </div>
  <div id="enderecoBox" style="display:none;">
    <div class="fg"><label>📍 Endereço</label><input type="text" id="endCliente" placeholder="Rua, número, bairro..."></div>
  </div>
  <div class="fg"><label>👤 Seu nome *</label><input type="text" id="nomeCliente" placeholder="Ex: João Silva"></div>
  <div class="fg" id="mesaBox" style="display:none;"><label>🪑 Mesa</label><input type="text" id="mesaCliente"></div>
  <div class="fg"><label>📱 WhatsApp</label><input type="tel" id="foneCliente" placeholder="89981234567"></div>
  <div class="pontos-bar" id="pontosBarCart" style="display:none;">
    <div style="font-size:1.6rem;">⭐</div>
    <div style="flex:1;"><strong id="pontosClienteNome">Seus pontos</strong><span id="pontosClienteInfo" style="display:block;font-size:.73rem;color:#aaa;"></span>
    <div class="pontos-prog"><div class="pontos-prog-bar" id="pontosProgBar" style="width:0%"></div></div></div>
  </div>
  <div class="cupom-box">
    <input type="text" id="cupomInput" placeholder="CUPOM DE DESCONTO" maxlength="20">
    <button onclick="aplicarCupom()">Aplicar</button>
  </div>
  <div id="cupomMsg"></div>
  <div class="obs-box"><label>💬 Observações</label><textarea id="obsCliente" placeholder="Ex: sem cebolinha..."></textarea></div>
  <p style="font-size:.8rem;color:#888;margin-bottom:8px;">💳 Pagamento:</p>
  <div class="popt" id="popt-pix" onclick="selPay('pix')"><div class="pico">📱</div><div class="pinf"><strong>Pix</strong><span>Transferência instantânea</span></div></div>
  <div id="det-pix" class="pdet">
    <p style="font-size:.78rem;color:#aaa;margin-bottom:4px;">Chave Pix:</p>
    <p class="pix-chave" id="pixChaveShow" onclick="copiarPix()" style="cursor:pointer;">89981216999 📋</p>
    <button id="btnRegistrarPagarPix" onclick="registrarEAguardarPix()" style="width:100%;padding:13px;background:#128C7E;color:#fff;border:none;border-radius:9px;font-weight:800;font-size:.97rem;cursor:pointer;margin-top:8px;">📱 Registrar Pedido e Aguardar Pix</button>
    <div id="aguardandoPixBox" style="display:none;margin-top:12px;background:#0d1a0d;border:1px solid #1e4a1e;border-radius:8px;padding:14px;text-align:center;">
      <p style="font-size:.85rem;color:#6db46d;font-weight:700;">Aguardando confirmação do Pix...</p>
    </div>
    <div id="pixConfirmadoBox" style="display:none;margin-top:12px;background:#0a1a0a;border:1px solid #2e7d32;border-radius:8px;padding:14px;text-align:center;">
      <div style="font-size:2rem;">✅</div>
      <p style="font-size:.95rem;color:#6db46d;font-weight:800;">Pix confirmado!</p>
    </div>
  </div>
  <div class="popt" id="popt-din" onclick="selPay('din')"><div class="pico">💵</div><div class="pinf"><strong>Dinheiro na entrega</strong><span>Paga quando chegar</span></div></div>
  <div class="popt" id="popt-cart" onclick="selPay('cart')"><div class="pico">🏧</div><div class="pinf"><strong>Cartão na entrega</strong><span>Débito ou crédito</span></div></div>
  <div class="ctrow"><span>Total</span><span id="cartTotModal">R$ 0,00</span></div>
  <button class="bpr" id="btnEnviarPedido" onclick="enviarWpp()" style="display:none;">📲 Enviar Pedido via WhatsApp</button>
  <button class="bsc" onclick="cls('ovCart')">Fechar</button>
</div></div>

<!-- PEDIDOS -->
<div class="ov" id="ovPedidos"><div class="box" style="max-width:660px;">
  <h2>📋 Pedidos</h2>
  <div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap;">
    <button onclick="filtroPed('todos',this)" class="bst bst-conf">Todos</button>
    <button onclick="filtroPed('novo',this)" class="bst" style="background:#1a2a3a;color:#5599ff;">Novos</button>
    <button onclick="filtroPed('confirmado',this)" class="bst bst-conf">Confirmados</button>
    <button onclick="filtroPed('preparo',this)" class="bst bst-prep">Em preparo</button>
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
    <button id="btnTabRel" class="tb" onclick="showTab('tRel',this);renderRel()">📊 Relat.</button>
    <button class="tb" onclick="showTab('tQr',this);renderQR()">🪑 QR</button>
    <button class="tb" onclick="showTab('tCrm',this);renderCrm()">👥 CRM</button>
    <button class="tb" onclick="showTab('tIa',this)">🤖 Suki</button>
    <button id="btnTabCfg" class="tb" onclick="showTab('tCfg',this)">🔧 Config</button>
  </div>
  <div id="tAdd" class="tc on">
    <div class="fg"><label>Categoria *</label><select id="fCat"></select></div>
    <div class="fg"><label>Nome *</label><input type="text" id="fNome"></div>
    <div class="fg"><label>Descrição</label><input type="text" id="fDesc"></div>
    <div class="fg"><label>Preço (R$) *</label><input type="number" id="fPreco" step="0.01"></div>
    <div class="fg"><label>Estoque (0=ilimitado)</label><input type="number" id="fEstoque" value="0"></div>
    <div class="fg"><label>Imagem (URL)</label><input type="text" id="fImg" oninput="prvImg(this.value)"></div>
    <img id="imgPrev" src="" style="width:100%;height:115px;object-fit:cover;border-radius:6px;margin-top:6px;display:none;">
    <input type="hidden" id="editId">
    <button class="bpr" id="btnSv" onclick="saveProd()">✅ Adicionar Produto</button>
    <button class="bsc" id="btnCE" style="display:none" onclick="cancelEdit()">✕ Cancelar</button>
    <p class="mok" id="mok">Salvo! ✓</p>
  </div>
  <div id="tCats" class="tc">
    <div class="fg"><label>Nova categoria</label><input type="text" id="fNewCat" placeholder="Ex: Combos..."></div>
    <button class="bpr" onclick="addCat()">➕ Criar</button>
    <div class="cchips" id="catChips" style="display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;"></div>
  </div>
  <div id="tList" class="tc">
    <div class="fg"><input type="text" id="srch" placeholder="🔍 Buscar..." oninput="renderAList()"></div>
    <p style="font-size:.75rem;color:#888;margin-bottom:8px;" id="aCnt"></p>
    <div class="apl" id="aProdList"></div>
  </div>
  <div id="tEst" class="tc"><div id="estList"></div></div>
  <div id="tRel" class="tc">
    <div style="display:flex;gap:7px;margin-bottom:14px;flex-wrap:wrap;">
      <select id="relTipo" onchange="renderRel()">
        <option value="dia">Hoje</option><option value="semana">Esta semana</option>
        <option value="mes" selected>Este mês</option><option value="ano">Este ano</option>
      </select>
      <select id="relCat" onchange="renderRel()"><option value="">Todas categorias</option></select>
    </div>
    <div id="relSumCards" class="rel-sumcards"></div>
    <div id="relList"></div>
  </div>
  <div id="tQr" class="tc">
    <div style="display:flex;align-items:center;gap:7px;margin-bottom:12px;">
      <label style="font-size:.82rem;color:#aaa;">Quantas mesas?</label>
      <input type="number" id="qtdMesas" value="15" min="1" max="50" style="width:70px;padding:8px;background:#1e1e1e;border:1px solid #333;border-radius:6px;color:#fff;">
      <button onclick="renderQR()" style="padding:8px 14px;background:var(--pr);color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:700;">Gerar</button>
    </div>
    <div id="qrList" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:10px;max-height:380px;overflow-y:auto;"></div>
  </div>
  <div id="tCrm" class="tc"><div id="crmList" style="max-height:400px;overflow-y:auto;"></div></div>
  <div id="tIa" class="tc">
    <p style="font-size:.79rem;color:#aaa;margin-bottom:11px;">🤖 <strong style="color:#c084fc;">Suki</strong> — sua assistente virtual!</p>
    <div style="display:flex;gap:7px;margin-bottom:10px;">
      <input type="text" id="iaInput" placeholder="Pergunte para a Suki..." style="flex:1;padding:9px;background:#1e1e1e;border:1px solid #333;border-radius:7px;color:#fff;font-size:.85rem;" onkeydown="if(event.key==='Enter')iaEnviar()">
      <button onclick="iaEnviar()" style="background:var(--pr);border:none;color:#fff;padding:9px 14px;border-radius:7px;cursor:pointer;font-weight:700;">➤</button>
    </div>
    <div id="iaResposta" style="background:#111;border-radius:8px;padding:12px;min-height:80px;font-size:.84rem;color:#ccc;white-space:pre-wrap;max-height:350px;overflow-y:auto;">
      <span style="color:#555;">A Suki vai responder aqui...</span>
    </div>
  </div>
  <div id="tCfg" class="tc">
    <div class="fg"><label>📱 WhatsApp do restaurante</label><input type="text" id="cfFone"></div>
    <div class="fg"><label>🔑 Chave Pix</label><input type="text" id="cfPix"></div>
    <div class="fg"><label>⏱️ Tempo estimado (min)</label><input type="number" id="cfTempo" value="30"></div>
    <div class="fg"><label>👑 Nova senha do dono</label><input type="password" id="cfPass"></div>
    <div class="fg"><label>⚙️ Nova senha admin</label><input type="password" id="cfPassAdmin"></div>
    <button class="bpr" onclick="saveCfg()">💾 Salvar</button>
  </div>
  <button class="bsc" onclick="cls('ovAdmin');document.getElementById('menuWrap').classList.remove('admin-mode')">Fechar Painel</button>
</div></div>

<!-- COMANDAS -->
<div class="ov" id="ovCmd"><div class="box" style="max-width:780px;">
  <h2>🪙 Comandas — Mesas</h2>
  <div id="mesaGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(90px,1fr));gap:8px;margin-bottom:14px;"></div>
  <div id="cmdDetalhe" style="display:none;">
    <div style="background:linear-gradient(135deg,#a01020,var(--pr));border-radius:10px;padding:12px 14px;margin-bottom:12px;display:flex;align-items:center;gap:10px;">
      <div style="font-size:1.6rem;">🪑</div>
      <div><strong id="cmdDetalheNome" style="display:block;color:#fff;font-size:1rem;font-weight:800;"></strong></div>
      <button onclick="fecharDetalhe()" style="background:rgba(0,0,0,.3);border:none;color:#fff;font-size:1.1rem;cursor:pointer;margin-left:auto;width:30px;height:30px;border-radius:50%;">✕</button>
    </div>
    <div id="cmdDetalheItens" style="max-height:260px;overflow-y:auto;margin-bottom:10px;"></div>
    <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-top:2px solid #222;margin-bottom:10px;">
      <span style="font-weight:800;">Total</span>
      <span id="cmdDetalheTot" style="color:var(--pr);font-weight:800;font-size:1.2rem;"></span>
    </div>
    <div style="display:flex;gap:6px;flex-wrap:wrap;">
      <button onclick="abrirCardapioComanda()" style="flex:1;background:var(--pr);color:#fff;border:none;padding:10px;border-radius:8px;cursor:pointer;font-weight:700;">🍽️ + Adicionar</button>
      <button onclick="openFecharMesa()" style="background:var(--gn);color:#fff;border:none;padding:10px 12px;border-radius:8px;cursor:pointer;font-weight:700;">🖨️ Fechar</button>
    </div>
  </div>
  <div style="border-top:1px solid #222;margin-top:12px;padding-top:12px;">
    <div style="display:flex;gap:7px;">
      <input type="text" id="newCmdNm" placeholder="Nome ou Mesa..." style="flex:1;padding:9px;background:#1e1e1e;border:1px solid #333;border-radius:7px;color:#fff;">
      <button onclick="newCmd()" style="background:var(--gn);border:none;color:#fff;padding:9px 16px;border-radius:7px;cursor:pointer;font-weight:700;">+ Nova</button>
    </div>
  </div>
  <button class="bsc" style="margin-top:8px;" onclick="cls('ovCmd')">Fechar</button>
</div></div>

<!-- CARDÁPIO COMANDA -->
<div class="ov" id="ovCardapioCmd"><div class="box" style="max-width:600px;">
  <div style="background:linear-gradient(135deg,#a01020,var(--pr));border-radius:10px;padding:12px 14px;margin-bottom:14px;display:flex;align-items:center;gap:10px;">
    <div style="font-size:1.6rem;">🪑</div>
    <div><strong id="cardapioCmdMesa" style="display:block;color:#fff;font-size:1rem;font-weight:800;">Mesa —</strong></div>
  </div>
  <div id="cardapioCmdCats" style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:12px;"></div>
  <div id="cardapioCmdGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:8px;max-height:360px;overflow-y:auto;"></div>
  <button class="bsc" style="margin-top:12px;" onclick="cls('ovCardapioCmd')">✖ Fechar</button>
</div></div>

<!-- MODAL QUANTIDADE -->
<div class="qty-wrap" id="qtyWrap" onclick="if(event.target===this)fecharQty()">
  <div class="qty-box">
    <div style="text-align:center;margin-bottom:14px;">
      <div style="background:var(--pr);color:#fff;border-radius:30px;padding:5px 16px;font-size:.8rem;font-weight:700;display:inline-block;" id="qtyMesaTag">🪑 Mesa —</div>
    </div>
    <div style="display:flex;align-items:center;gap:12px;background:#1e1e1e;border-radius:11px;padding:11px;margin-bottom:16px;">
      <img id="qtyProdImg" src="" style="width:64px;height:64px;object-fit:cover;border-radius:8px;">
      <div><strong id="qtyProdNome" style="display:block;font-size:.95rem;font-weight:800;"></strong>
      <span id="qtyProdPreco" style="color:var(--pr);font-weight:700;font-size:.88rem;"></span></div>
    </div>
    <div class="qty-big">
      <button class="qb-minus" onclick="qtyStep(-1)">−</button>
      <span class="qb-n" id="qtyN">1</span>
      <button class="qb-plus" onclick="qtyStep(1)">+</button>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;background:#1e1e1e;border-radius:9px;padding:10px 14px;margin-bottom:12px;">
      <span style="font-size:.82rem;color:#888;">Subtotal</span>
      <strong id="qtySub" style="color:var(--gn);font-size:1.05rem;">R$ 0,00</strong>
    </div>
    <textarea id="qtyObs" placeholder="Observação..." style="width:100%;padding:9px 12px;background:#1e1e1e;border:1px solid #333;border-radius:9px;color:#fff;font-size:.85rem;margin-bottom:14px;resize:none;" rows="2"></textarea>
    <button onclick="confirmarQty()" style="width:100%;padding:13px;background:var(--gn);color:#fff;border:none;border-radius:11px;font-weight:800;font-size:1rem;cursor:pointer;margin-bottom:9px;">✅ Adicionar à comanda</button>
    <button onclick="fecharQty()" style="width:100%;padding:10px;background:#222;color:#888;border:none;border-radius:11px;cursor:pointer;">Cancelar</button>
  </div>
</div>

<!-- FECHAR MESA -->
<div class="ov" id="ovFechar"><div class="box" style="max-width:460px;">
  <h2>💰 Fechar Comanda</h2>
  <div id="fcMesaNome" style="background:linear-gradient(135deg,#a01020,var(--pr));color:#fff;border-radius:9px;padding:9px 14px;font-weight:800;margin-bottom:12px;"></div>
  <div id="fcResumo" style="max-height:220px;overflow-y:auto;margin-bottom:14px;background:#111;border-radius:9px;padding:8px 10px;"></div>
  <select id="fcPag" style="width:100%;padding:9px;background:#1e1e1e;border:1px solid #333;border-radius:7px;color:#fff;margin-bottom:10px;">
    <option value="dinheiro">💵 Dinheiro</option>
    <option value="pix">📱 Pix</option>
    <option value="cartao">🏧 Cartão</option>
  </select>
  <div style="display:flex;justify-content:space-between;align-items:center;background:#1e1e1e;border-radius:9px;padding:12px 14px;margin:10px 0;">
    <span style="font-weight:700;color:#aaa;">TOTAL</span>
    <span id="fcTot" style="color:var(--pr);font-weight:900;font-size:1.4rem;"></span>
  </div>
  <button class="bgn" onclick="confirmarFechamento()">🖨️ Imprimir & Fechar</button>
  <button class="bsc" onclick="cls('ovFechar')">Cancelar</button>
</div></div>

<div class="cmd-toast" id="cmdToast">✅ <span id="cmdToastTxt"></span></div>
<div class="upsell-bar" id="upsellBar">
  <img id="upsellImg" src="" style="width:44px;height:44px;object-fit:cover;border-radius:7px;flex-shrink:0;">
  <div style="flex:1;min-width:0;"><strong id="upsellNome" style="display:block;font-size:.8rem;"></strong><span id="upsellPreco" style="font-size:.72rem;color:var(--gd);"></span></div>
  <button onclick="addUpsell()" style="background:var(--gd);color:#000;border:none;padding:6px 12px;border-radius:8px;font-weight:800;font-size:.78rem;cursor:pointer;">+ Adicionar</button>
  <button onclick="fecharUpsell()" style="background:none;border:none;color:#555;cursor:pointer;font-size:1rem;">✕</button>
</div>

<script type="module">
import{initializeApp}from"https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import{getFirestore,collection,doc,setDoc,getDoc,getDocs,deleteDoc,onSnapshot,addDoc}from"https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
const FB={apiKey:"AIzaSyD-Qm_-JIMb5NSdow7RDAcd6PGZLDX0org",authDomain:"yanni-sushi.firebaseapp.com",projectId:"yanni-sushi",storageBucket:"yanni-sushi.firebasestorage.app",messagingSenderId:"683902738779",appId:"1:683902738779:web:9ca1289e376b804d27ba7e"};
const fbApp=initializeApp(FB);
const fdb=getFirestore(fbApp);
function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2,6);}
function fmt(v){return'R$ '+parseFloat(v||0).toFixed(2).replace('.',',');}
let produtos=[],balcao=[],comandas=[],vendas=[],pedidos=[],garcons=[],cfg={fone:'5589981216999',pass:'y1234',passAdmin:'y1235',passGarcom:'4321',pix:'89981216999',tempo:30,taxaEntrega:3,cats:['Sushis Tradicionais','Sushis Especiais','Sushis Hot','Temaki Cru','Temaki Hot','Carnes','Bebidas','Refrigerantes','Cervejas']};
let cart=[],payMethod='',editCmdId=null,activeCat='all',tipoPedido='retirada',mesaAtual='',cupomAplicado=null,mesaSelecionada=null,_qtyProd=null,carrinhoComanda=[],usuarioLogado=null;
window.cls=id=>document.getElementById(id).style.display='none';
window.opn=id=>document.getElementById(id).style.display='block';
function setSyncStatus(ok){const d=document.getElementById('syncDot');if(d)d.className='sync-dot'+(ok?'':' off');}
async function initFB(){
  try{
    const cfgDoc=await getDoc(doc(fdb,'config','main'));
    if(cfgDoc.exists())cfg={...cfg,...cfgDoc.data()};
    atualizarTempoBanner();
    onSnapshot(collection(fdb,'produtos'),snap=>{produtos=snap.docs.map(d=>({...d.data(),id:d.id}));render();setSyncStatus(true);});
    onSnapshot(collection(fdb,'comandas'),snap=>{comandas=snap.docs.map(d=>({...d.data(),id:d.id}));renderMesaGrid();if(mesaSelecionada)renderDetalheComanda();});
    onSnapshot(collection(fdb,'vendas'),snap=>{vendas=snap.docs.map(d=>({...d.data(),id:d.id}));});
    onSnapshot(collection(fdb,'pedidos'),snap=>{pedidos=snap.docs.map(d=>({...d.data(),id:d.id}));renderPedidos();atualizaBadgePed();setSyncStatus(true);});
    detectarMesa();
  }catch(e){setSyncStatus(false);}
}
window.render=function(){
  const wrap=document.getElementById('menuWrap');
  const list=activeCat==='all'?produtos:produtos.filter(p=>p.cat===activeCat);
  const cats=activeCat==='all'?[...new Set(produtos.map(p=>p.cat))]:[activeCat];
  if(!produtos.length){wrap.innerHTML='<p style="text-align:center;color:#555;margin-top:50px;">Carregando...</p>';buildCatBar();return;}
  let html='';
  cats.forEach(cat=>{
    const items=list.filter(p=>p.cat===cat&&p.disponivel!==false);if(!items.length)return;
    html+='<div class="sec-title">'+cat+'</div><div class="grid">';
    items.forEach(p=>{
      html+='<div class="pcard"><button class="btn-del" onclick="delProd(\''+p.id+'\')">✕</button><button class="btn-edt" onclick="editProd(\''+p.id+'\')">✏️</button><img class="pimg" src="'+( p.img||'https://placehold.co/400x148/1a1a1a/444?text=Sem+foto')+'" onerror="this.src=\'https://placehold.co/400x148/1a1a1a/444?text=Sem+foto\'"><div class="pinfo"><div class="pname">'+p.nome+'</div><div class="pdesc">'+( p.desc||'')+'</div><div class="pfoot"><span class="ppreco">'+fmt(p.preco)+'</span><button class="btn-add" onclick="addCart(\''+p.id+'\')">+ Pedido</button></div></div></div>';
    });html+='</div>';
  });
  wrap.innerHTML=html||'<p style="text-align:center;color:#555;margin-top:30px;">Nenhum item.</p>';buildCatBar();
}
function buildCatBar(){
  const cats=[...new Set(produtos.map(p=>p.cat))];
  const bar=document.getElementById('catBar');
  bar.innerHTML=\`<span class="ct${activeCat==='all'?' on':''}" onclick="setCat('all',this)">Todos</span>\`;
  cats.forEach(c=>{bar.innerHTML+=\`<span class="ct${activeCat===c?' on':''}" onclick="setCat('${c.replace(/'/g,"\\'")}',this)">${c}</span>\`;});
}
window.setCat=function(cat,el){activeCat=cat;document.querySelectorAll('.ct').forEach(t=>t.classList.remove('on'));el.classList.add('on');render();}
window.addCart=function(id){const p=produtos.find(x=>x.id===id);if(!p)return;const ex=cart.find(x=>x.id===id);if(ex)ex.qty++;else cart.push({id,nome:p.nome,preco:p.preco,qty:1,cat:p.cat});updCartBar();}
function updCartBar(){const cnt=cart.reduce((a,c)=>a+c.qty,0);const tot=cart.reduce((a,c)=>a+c.preco*c.qty,0)+(tipoPedido==='delivery'?cfg.taxaEntrega:0);document.getElementById('cbarCnt').textContent=cnt;document.getElementById('cbarTot').textContent=fmt(tot);document.getElementById('cbar').style.display=cnt?'flex':'none';}
window.openCart=function(){renderCartModal();payMethod='';document.querySelectorAll('.popt').forEach(o=>o.classList.remove('on'));document.querySelectorAll('.pdet').forEach(d=>d.style.display='none');document.getElementById('btnEnviarPedido').style.display='none';if(mesaAtual){document.getElementById('mesaBox').style.display='block';document.getElementById('mesaCliente').value=mesaAtual;}opn('ovCart');}
function renderCartModal(){const el=document.getElementById('cartList');if(!cart.length){el.innerHTML='<p style="color:#555;text-align:center;padding:18px;">Carrinho vazio.</p>';document.getElementById('cartTotModal').textContent=fmt(0);return;}const taxa=tipoPedido==='delivery'?cfg.taxaEntrega:0;const subtotal=cart.reduce((a,c)=>a+c.preco*c.qty,0);const tot=subtotal+taxa;el.innerHTML=cart.map(it=>\`<div class="cir"><div class="cin">${it.nome}</div><div class="qc"><button onclick="cQty('${it.id}',-1)">−</button><span>${it.qty}</span><button onclick="cQty('${it.id}',1)">+</button></div><div class="cip">${fmt(it.preco*it.qty)}</div></div>\`).join('');document.getElementById('cartTotModal').textContent=fmt(tot);}
window.cQty=function(id,d){const i=cart.findIndex(x=>x.id===id);if(i<0)return;cart[i].qty+=d;if(cart[i].qty<=0)cart.splice(i,1);renderCartModal();updCartBar();}
window.selPay=function(m){payMethod=m;document.querySelectorAll('.popt').forEach(o=>o.classList.remove('on'));document.querySelectorAll('.pdet').forEach(d=>d.style.display='none');document.getElementById('popt-'+m).classList.add('on');if(document.getElementById('det-'+m))document.getElementById('det-'+m).style.display='block';const btnEnv=document.getElementById('btnEnviarPedido');if(m==='pix'){btnEnv.style.display='none';const chave=cfg.pix||'89981216999';document.getElementById('pixChaveShow').textContent=chave+' 📋';}else{btnEnv.style.display='block';}}
window.copiarPix=function(){const chave=cfg.pix||'89981216999';navigator.clipboard.writeText(chave).then(()=>{const el=document.getElementById('pixChaveShow');el.textContent=chave+' ✅ Copiado!';setTimeout(()=>el.textContent=chave+' 📋',2000);});}
window.selTipo=function(tipo){tipoPedido=tipo;const del=document.getElementById('tipoDel');const ret=document.getElementById('tipoRet');const end=document.getElementById('enderecoBox');if(tipo==='delivery'){del.style.borderColor='var(--pr)';ret.style.borderColor='#333';end.style.display='block';}else{ret.style.borderColor='var(--pr)';del.style.borderColor='#333';end.style.display='none';}updCartBar();renderCartModal();}
async function getProxNumPedido(){try{const d=await getDoc(doc(fdb,'config','pedido_counter'));const n=(d.exists()?d.data().n:0)+1;await setDoc(doc(fdb,'config','pedido_counter'),{n});return n;}catch(e){return Math.floor(Math.random()*9000)+1000;}}
window.registrarEAguardarPix=async function(){const nome=document.getElementById('nomeCliente').value.trim();if(!nome){alert('Informe seu nome!');return;}const numPed=await getProxNumPedido();const pedId=uid();const subtotal=cart.reduce((a,c)=>a+c.preco*c.qty,0);const taxa=tipoPedido==='delivery'?cfg.taxaEntrega:0;const tot=subtotal+taxa;const ped={id:pedId,num:numPed,cliente:nome,fone:document.getElementById('foneCliente').value.trim(),tipo:tipoPedido,itens:cart.map(i=>({nome:i.nome,preco:i.preco,qty:i.qty})),subtotal,taxa,total:tot,status:'aguardando_pagamento',pay:'Pix',criadoEm:new Date().toISOString(),criadoEmFmt:new Date().toLocaleString('pt-BR')};await setDoc(doc(fdb,'pedidos',pedId),ped);document.getElementById('btnRegistrarPagarPix').style.display='none';document.getElementById('aguardandoPixBox').style.display='block';}
window.enviarWpp=async function(){if(!cart.length){alert('Carrinho vazio!');return;}const nome=document.getElementById('nomeCliente').value.trim();if(!nome){alert('Informe seu nome!');return;}const taxa=tipoPedido==='delivery'?cfg.taxaEntrega:0;const subtotal=cart.reduce((a,c)=>a+c.preco*c.qty,0);const tot=subtotal+taxa;const numPed=await getProxNumPedido();let msg=\`🍣 *Pedido #${String(numPed).padStart(4,'0')} — Yanni Sushi*\n\n👤 ${nome}\n📍 ${tipoPedido==='delivery'?'Delivery — '+document.getElementById('endCliente').value:'Retirada'}\n\n\`;cart.forEach(i=>{msg+=\`• ${i.qty}x ${i.nome} — ${fmt(i.preco*i.qty)}\n\`;});msg+=\`\n*TOTAL: ${fmt(tot)}*\`;const ped={id:uid(),num:numPed,cliente:nome,tipo:tipoPedido,itens:cart.map(i=>({nome:i.nome,preco:i.preco,qty:i.qty})),subtotal,taxa,total:tot,status:'novo',pay:payMethod==='din'?'Dinheiro':'Cartão',criadoEm:new Date().toISOString(),criadoEmFmt:new Date().toLocaleString('pt-BR')};await setDoc(doc(fdb,'pedidos',ped.id),ped);await registrarVenda(cart,'whatsapp');window.open(\`https://wa.me/${cfg.fone}?text=${encodeURIComponent(msg)}\`,'_blank');cart=[];updCartBar();cls('ovCart');}
async function registrarVenda(itens,origem){try{await addDoc(collection(fdb,'vendas'),{data:new Date().toISOString(),origem,itens:itens.map(i=>({nome:i.nome,preco:i.preco,qty:i.qty,cat:i.cat||'Outros'}))});}catch(e){}}
function atualizaBadgePed(){const novos=pedidos.filter(p=>p.status==='novo').length;const badge=document.getElementById('pedBadge');if(badge){badge.textContent=novos;badge.style.display=novos?'inline':'none';}}
window.openPedidos=function(){renderPedidos();opn('ovPedidos');}
window.filtroPed=function(f,btn){document.querySelectorAll('#ovPedidos .bst').forEach(b=>b.style.opacity='.5');if(btn)btn.style.opacity='1';const el=document.getElementById('pedList');let lista=[...pedidos].sort((a,b)=>b.criadoEm>a.criadoEm?1:-1);if(f!=='todos')lista=lista.filter(p=>p.status===f);if(!lista.length){el.innerHTML='<p style="color:#555;text-align:center;padding:20px;">Nenhum pedido.</p>';return;}el.innerHTML=lista.map(p=>{const itens=p.itens.map(i=>\`${i.qty}x ${i.nome}\`).join(', ');return\`<div class="ped-card"><div class="ped-head"><div class="ped-info"><div class="ped-nome">${p.cliente||'Cliente'}</div>${p.fone?\`<div class="ped-fone">📱 ${p.fone}</div>\`:''}</div><div class="ped-tot">${fmt(p.total)}</div></div><div class="ped-itens">${itens}</div><span class="ped-status st-${p.status||'novo'}">${p.status||'novo'}</span><div class="ped-btns">${p.status==='novo'?\`<button class="bst bst-conf" onclick="mudarStatus('${p.id}','confirmado')">✅ Confirmar</button>\`:''}<button class="bst" style="background:#2a1a1a;color:#ff6666;" onclick="delPed('${p.id}')">🗑️</button></div></div>\`;}).join('');}
function renderPedidos(){const el=document.getElementById('pedList');if(!el)return;let lista=[...pedidos].sort((a,b)=>b.criadoEm>a.criadoEm?1:-1);el.innerHTML=lista.map(p=>{const itens=p.itens.map(i=>\`${i.qty}x ${i.nome}\`).join(', ');return\`<div class="ped-card"><div class="ped-head"><div class="ped-info"><div class="ped-nome">${p.cliente||'Cliente'}</div></div><div class="ped-tot">${fmt(p.total)}</div></div><div class="ped-itens">${itens}</div><span class="ped-status st-${p.status||'novo'}">${p.status||'novo'}</span><div class="ped-btns"><button class="bst" style="background:#2a1a1a;color:#ff6666;" onclick="delPed('${p.id}')">🗑️</button></div></div>\`;}).join('');}
window.mudarStatus=async function(id,novoStatus){const p=pedidos.find(x=>x.id===id);if(!p)return;p.status=novoStatus;await setDoc(doc(fdb,'pedidos',id),p);renderPedidos();atualizaBadgePed();}
window.delPed=async function(id){if(!confirm('Remover?'))return;await deleteDoc(doc(fdb,'pedidos',id));}
window.checkAdmin=function(){const senha=prompt('Senha:');if(senha===cfg.pass){usuarioLogado={tipo:'dono'};document.getElementById('menuWrap').classList.add('admin-mode');document.getElementById('btnCmd').style.display='flex';document.getElementById('btnPed').style.display='flex';popCatSel();document.getElementById('cfFone').value=cfg.fone;document.getElementById('cfPix').value=cfg.pix||'';document.getElementById('cfTempo').value=cfg.tempo||30;opn('ovAdmin');}else if(senha===cfg.passAdmin){document.getElementById('menuWrap').classList.add('admin-mode');popCatSel();opn('ovAdmin');['btnTabRel','btnTabCfg','btnTabEst'].forEach(id=>{const el=document.getElementById(id);if(el)el.style.display='none';});}else if(senha===cfg.passGarcom){document.getElementById('btnCmd').style.display='flex';openComandas();}else if(senha!==null){alert('Senha incorreta.');}}
window.showTab=function(id,btn){document.querySelectorAll('.tc').forEach(t=>t.classList.remove('on'));document.querySelectorAll('.tb').forEach(b=>b.classList.remove('on'));document.getElementById(id).classList.add('on');if(btn)btn.classList.add('on');if(id==='tList')renderAList();}
function popCatSel(){const s=document.getElementById('fCat');s.innerHTML='<option value="">-- Selecione --</option>';(cfg.cats||[]).forEach(c=>s.innerHTML+=\`<option value="${c}">${c}</option>\`);}
window.addCat=function(){const v=document.getElementById('fNewCat').value.trim();if(!v)return;if(!cfg.cats.includes(v)){cfg.cats.push(v);setDoc(doc(fdb,'config','main'),cfg);}document.getElementById('fNewCat').value='';renderCatChips();popCatSel();}
function renderCatChips(){document.getElementById('catChips').innerHTML=(cfg.cats||[]).map(c=>\`<div style="background:#222;border:1px solid #333;border-radius:20px;padding:4px 11px;font-size:.76rem;display:inline-flex;align-items:center;gap:5px;">${c}<span style="cursor:pointer;color:#ff4444;" onclick="rmCat('${c.replace(/'/g,"\\'")}')">✕</span></div>\`).join('');}
window.rmCat=async function(c){cfg.cats=cfg.cats.filter(x=>x!==c);await setDoc(doc(fdb,'config','main'),cfg);renderCatChips();popCatSel();}
window.saveProd=async function(){const cat=document.getElementById('fCat').value,nome=document.getElementById('fNome').value.trim(),desc=document.getElementById('fDesc').value.trim(),prec=parseFloat(document.getElementById('fPreco').value),est=parseInt(document.getElementById('fEstoque').value)||0,img=document.getElementById('fImg').value.trim(),eid=document.getElementById('editId').value;if(!cat||!nome||isNaN(prec))return alert('Preencha os campos obrigatórios.');const pid=eid||uid();await setDoc(doc(fdb,'produtos',pid),{id:pid,cat,nome,desc,preco:prec,img,estoque:est,disponivel:true});cancelEdit();const m=document.getElementById('mok');m.style.display='block';setTimeout(()=>m.style.display='none',2500);}
window.cancelEdit=function(){document.getElementById('editId').value='';['fNome','fDesc','fImg'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});document.getElementById('fPreco').value='';document.getElementById('fEstoque').value='0';document.getElementById('fCat').value='';document.getElementById('imgPrev').style.display='none';document.getElementById('btnSv').textContent='✅ Adicionar Produto';document.getElementById('btnCE').style.display='none';}
window.editProd=function(id){const p=produtos.find(x=>x.id===id);if(!p)return;popCatSel();document.getElementById('fCat').value=p.cat;document.getElementById('fNome').value=p.nome;document.getElementById('fDesc').value=p.desc||'';document.getElementById('fPreco').value=p.preco;document.getElementById('fEstoque').value=p.estoque||0;document.getElementById('fImg').value=p.img||'';prvImg(p.img||'');document.getElementById('editId').value=id;document.getElementById('btnSv').textContent='💾 Salvar';document.getElementById('btnCE').style.display='block';opn('ovAdmin');showTab('tAdd',document.querySelector('.tb'));document.querySelector('.tb').classList.add('on');}
window.delProd=async function(id){const p=produtos.find(x=>x.id===id);if(!p||!confirm(\`Remover "${p.nome}"?\`))return;await deleteDoc(doc(fdb,'produtos',id));}
window.toggleDisponivel=async function(id){const p=produtos.find(x=>x.id===id);if(!p)return;p.disponivel=p.disponivel===false?true:false;await setDoc(doc(fdb,'produtos',id),p);renderAList();}
function renderAList(){const q=(document.getElementById('srch').value||'').toLowerCase();const f=produtos.filter(p=>p.nome.toLowerCase().includes(q)||p.cat.toLowerCase().includes(q));document.getElementById('aCnt').textContent=\`${f.length} produto(s)\`;document.getElementById('aProdList').innerHTML=f.map(p=>{const tem=p.disponivel!==false;return\`<div class="api" style="border-left:3px solid ${tem?'#6db46d':'#ff4444'};"><img src="${p.img||'https://placehold.co/44x44/1e1e1e/444?text=?'}" onerror="this.src='https://placehold.co/44x44/1e1e1e/444?text=?'"><div style="flex:1;min-width:0;"><strong style="display:block;font-size:.86rem;">${p.nome}</strong><span style="font-size:.72rem;color:#888;">${p.cat} · ${fmt(p.preco)}</span></div><div style="display:flex;gap:4px;"><button style="background:${tem?'#1a3a1a':'#3a1a1a'};color:${tem?'#6db46d':'#ff6666'};border:1px solid ${tem?'#6db46d':'#ff4444'};border-radius:5px;padding:4px 8px;cursor:pointer;font-size:.72rem;font-weight:700;" onclick="toggleDisponivel('${p.id}')">${tem?'✅ Tem':'❌ Esgotado'}</button><button style="background:none;border:1px solid var(--gd);color:var(--gd);border-radius:4px;padding:3px 7px;cursor:pointer;font-size:.7rem;" onclick="editProd('${p.id}')">✏️</button><button style="background:none;border:1px solid #ff4444;color:#ff4444;border-radius:4px;padding:3px 7px;cursor:pointer;font-size:.7rem;" onclick="delProd('${p.id}')">✕</button></div></div>\`;}).join('');}
window.prvImg=function(u){const i=document.getElementById('imgPrev');if(u){i.src=u;i.style.display='block';}else i.style.display='none';}
window.saveCfg=async function(){cfg.fone=document.getElementById('cfFone').value.trim()||cfg.fone;cfg.pix=document.getElementById('cfPix').value.trim();cfg.tempo=parseInt(document.getElementById('cfTempo').value)||30;const np=document.getElementById('cfPass').value.trim();if(np)cfg.pass=np;const na=document.getElementById('cfPassAdmin');if(na&&na.value.trim())cfg.passAdmin=na.value.trim();await setDoc(doc(fdb,'config','main'),cfg);alert('Salvo!');}
window.renderEstoque=function(){const el=document.getElementById('estList');el.innerHTML=produtos.map(p=>\`<div style="display:flex;align-items:center;gap:9px;padding:8px;background:#1e1e1e;border-radius:7px;margin-bottom:6px;"><img src="${p.img||'https://placehold.co/38x38/1e1e1e/444?text=?'}" style="width:38px;height:38px;object-fit:cover;border-radius:5px;"><div style="flex:1;"><div style="font-size:.84rem;font-weight:700;">${p.nome}</div><div style="font-size:.7rem;color:#888;">${p.cat}</div></div><div style="display:flex;align-items:center;gap:6px;"><button onclick="adjEst('${p.id}',-1)" style="background:#2a2a2a;border:none;color:#fff;width:24px;height:24px;border-radius:50%;cursor:pointer;">−</button><span style="min-width:36px;text-align:center;font-size:.88rem;font-weight:700;">${p.estoque===0?'∞':p.estoque}</span><button onclick="adjEst('${p.id}',1)" style="background:#2a2a2a;border:none;color:#fff;width:24px;height:24px;border-radius:50%;cursor:pointer;">+</button><button onclick="setEstInf('${p.id}')" style="background:none;border:1px solid #333;color:#aaa;border-radius:4px;padding:2px 7px;cursor:pointer;font-size:.7rem;">∞</button></div></div>\`).join('');}
window.adjEst=async function(id,d){const p=produtos.find(x=>x.id===id);if(!p)return;p.estoque=Math.max(0,(p.estoque||0)+d);await setDoc(doc(fdb,'produtos',id),p);renderEstoque();}
window.setEstInf=async function(id){const p=produtos.find(x=>x.id===id);if(!p)return;p.estoque=0;await setDoc(doc(fdb,'produtos',id),p);renderEstoque();}
window.renderRel=function(){const tipo=document.getElementById('relTipo').value,agora=new Date();const vf=vendas.filter(v=>{const d=new Date(v.data);if(tipo==='dia')return d.toDateString()===agora.toDateString();if(tipo==='mes')return d.getMonth()===agora.getMonth()&&d.getFullYear()===agora.getFullYear();return true;});const mapa={};vf.forEach(v=>{v.itens.forEach(i=>{if(!mapa[i.nome])mapa[i.nome]={nome:i.nome,qty:0,total:0};mapa[i.nome].qty+=i.qty;mapa[i.nome].total+=i.preco*i.qty;});});const itens=Object.values(mapa).sort((a,b)=>b.total-a.total);const totalGeral=itens.reduce((a,i)=>a+i.total,0);document.getElementById('relSumCards').innerHTML=\`<div class="rel-sumcard"><div class="rsv">${fmt(totalGeral)}</div><div class="rsl">Faturamento</div></div><div class="rel-sumcard"><div class="rsv">${vf.length}</div><div class="rsl">Pedidos</div></div>\`;document.getElementById('relList').innerHTML=itens.map(i=>\`<div class="rel-item"><div><div style="font-size:.86rem;font-weight:700;">${i.nome}</div></div><div style="text-align:right;"><div style="font-size:.78rem;color:#aaa;">${i.qty}x</div><div style="font-size:.88rem;font-weight:700;color:var(--pr);">${fmt(i.total)}</div></div></div>\`).join('')+'<div class="rel-total"><span>TOTAL</span><span>'+fmt(totalGeral)+'</span></div>';}
window.renderQR=function(){const qtd=parseInt(document.getElementById('qtdMesas').value)||15;const baseUrl=window.location.origin+window.location.pathname;const el=document.getElementById('qrList');el.innerHTML='';for(let i=1;i<=qtd;i++){const url=\`${baseUrl}?mesa=${i}\`;el.innerHTML+=\`<div style="background:#1e1e1e;border-radius:8px;padding:10px;text-align:center;"><img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(url)}" style="width:100px;height:100px;border-radius:4px;background:#fff;padding:4px;"><div style="font-size:.78rem;font-weight:700;margin-top:6px;color:var(--pr);">Mesa ${i}</div></div>\`;}}
function renderCrm(){const el=document.getElementById('crmList');if(!el)return;const mapa={};pedidos.forEach(p=>{if(!p.fone)return;const k=p.fone.replace(/\D/g,'');if(!mapa[k])mapa[k]={nome:p.cliente||'?',fone:k,total:0,qtd:0};mapa[k].total+=p.total||0;mapa[k].qtd++;});const lista=Object.values(mapa).sort((a,b)=>b.qtd-a.qtd);el.innerHTML=lista.map(c=>\`<div style="background:#1e1e1e;border-radius:8px;padding:10px;margin-bottom:7px;display:flex;align-items:center;gap:10px;"><div style="flex:1;"><div style="font-weight:700;font-size:.88rem;">${c.nome}</div><div style="font-size:.74rem;color:#888;">${c.qtd} pedido(s) · ${fmt(c.total)}</div></div><button onclick="window.open('https://wa.me/55${c.fone}','_blank')" style="background:#25D366;border:none;color:#fff;padding:6px 10px;border-radius:6px;cursor:pointer;font-size:.75rem;font-weight:700;">WhatsApp</button></div>\`).join('');}
window.renderCrm=renderCrm;
window.iaEnviar=function(){const inp=document.getElementById('iaInput');const q=inp.value.trim();if(!q)return;iaPerguntar(q);inp.value='';}
window.iaPerguntar=async function(pergunta){const el=document.getElementById('iaResposta');el.textContent='🍣 Suki analisando...';const totalVendas=vendas.reduce((s,v)=>s+(v.itens||[]).reduce((a,i)=>a+(i.preco||0)*(i.qty||1),0),0);const top5=Object.entries(vendas.reduce((m,v)=>{(v.itens||[]).forEach(i=>{m[i.nome]=(m[i.nome]||0)+(i.qty||1);});return m;},{} )).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([n,q])=>\`${n}: ${q}x\`).join(', ');const contexto=\`Você é Suki, assistente do Yanni Sushi de Alegrete-PI. Responda em português, máximo 3 linhas.\n\nDados: Faturamento total: R$${totalVendas.toFixed(2)}, Top pratos: ${top5||'sem dados'}, Pedidos: ${pedidos.length}\n\nPergunta: ${pergunta}\`;try{const resp=await fetch('/suki-painel',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({pergunta:contexto})});const data=await resp.json();el.textContent=data.resposta||'Suki não conseguiu conectar.';}catch(e){el.textContent='Suki não conseguiu conectar.';}}
window.aplicarCupom=function(){document.getElementById('cupomMsg').innerHTML='<div style="font-size:.78rem;color:#6db46d;">✅ Cupom aplicado!</div>';}
function atualizarTempoBanner(){const b=document.getElementById('tempoBanner');const v=document.getElementById('tempoValor');if(b&&v){v.textContent=(cfg.tempo||30)+' min';b.style.display='flex';}}
function detectarMesa(){const params=new URLSearchParams(window.location.search);const mesa=params.get('mesa');if(mesa){mesaAtual=\`Mesa ${mesa}\`;const banner=document.createElement('div');banner.style.cssText='position:fixed;top:60px;left:50%;transform:translateX(-50%);background:var(--pr);color:#fff;padding:7px 18px;border-radius:20px;font-weight:700;font-size:.85rem;z-index:998;';banner.textContent=\`🪑 ${mesaAtual}\`;document.body.appendChild(banner);}}
window.abrirWhatsAppDuvida=function(){window.open(\`https://wa.me/${cfg.fone}?text=${encodeURIComponent('Olá! Estou no cardápio do Yanni Sushi 🍣')}\`,'_blank');}
window.openComandas=function(){renderMesaGrid();opn('ovCmd');}
const TOTAL_MESAS=15;
function renderMesaGrid(){const grid=document.getElementById('mesaGrid');if(!grid)return;let html='';for(let i=1;i<=TOTAL_MESAS;i++){const cmd=comandas.find(c=>c.nome===\`Mesa ${i}\`&&c.aberta);const tot=cmd?cmd.itens.reduce((a,it)=>a+it.preco*it.qty,0):0;const cls=cmd?'ocupada':'livre';const ico=cmd?'🔴':'🟢';const sel=mesaSelecionada&&mesaSelecionada.nome===\`Mesa ${i}\`?'selecionada':'';html+='<div class="mesa-card '+cls+' '+sel+'" onclick="selecionarMesa('+i+')"><div>'+ico+'</div><div class="mesa-num">Mesa '+i+'</div><div style="font-size:.65rem;color:#888;">'+(cmd?'Ocupada':'Livre')+'</div>'+(cmd?'<div class="mesa-tot">'+fmt(tot)+'</div>':'')+'</div>';}grid.innerHTML=html;}
window.selecionarMesa=async function(num){const nome=\`Mesa ${num}\`;let cmd=comandas.find(c=>c.nome===nome&&c.aberta);if(!cmd){const nc={id:uid(),nome,itens:[],aberta:true,criadaEm:new Date().toLocaleString('pt-BR')};await setDoc(doc(fdb,'comandas',nc.id),nc);cmd=nc;}mesaSelecionada=cmd;renderMesaGrid();renderDetalheComanda();document.getElementById('cmdDetalhe').style.display='block';}
function renderDetalheComanda(){if(!mesaSelecionada)return;const c=comandas.find(x=>x.id===mesaSelecionada.id)||mesaSelecionada;mesaSelecionada=c;document.getElementById('cmdDetalheNome').textContent=\`🪑 ${c.nome}\`;const tot=c.itens.reduce((a,i)=>a+i.preco*i.qty,0);document.getElementById('cmdDetalheTot').textContent=fmt(tot);const el=document.getElementById('cmdDetalheItens');if(!c.itens.length){el.innerHTML='<p style="color:#555;text-align:center;padding:14px;">Nenhum item ainda.</p>';return;}el.innerHTML=c.itens.map((it,idx)=>\`<div class="cmd-item-row"><div class="cin">${it.nome}${it.obs?\`<span style="display:block;font-size:.7rem;color:#888;">${it.obs}</span>\`:''}</div><div class="iqc"><button class="iqc-minus" onclick="cmdQty('${c.id}',${idx},-1)">−</button><span class="iqc-num">${it.qty}</span><button class="iqc-plus" onclick="cmdQty('${c.id}',${idx},1)">+</button></div><div class="cip">${fmt(it.preco*it.qty)}</div></div>\`).join('');}
window.fecharDetalhe=function(){mesaSelecionada=null;document.getElementById('cmdDetalhe').style.display='none';renderMesaGrid();}
window.newCmd=async function(){const nm=document.getElementById('newCmdNm').value.trim();if(!nm)return;const c={id:uid(),nome:nm,itens:[],aberta:true,criadaEm:new Date().toLocaleString('pt-BR')};await setDoc(doc(fdb,'comandas',c.id),c);document.getElementById('newCmdNm').value='';}
window.cmdQty=async function(cmdId,idx,delta){const c=comandas.find(x=>x.id===cmdId);if(!c)return;const it=c.itens[idx];if(!it)return;it.qty=Math.max(0,it.qty+delta);if(it.qty===0)c.itens.splice(idx,1);await setDoc(doc(fdb,'comandas',c.id),c);renderDetalheComanda();}
window.abrirCardapioComanda=function(){if(!mesaSelecionada)return;document.getElementById('cardapioCmdMesa').textContent=\`🪑 ${mesaSelecionada.nome}\`;renderCardapioCmd();opn('ovCardapioCmd');}
function renderCardapioCmd(){const cats=[...new Set(produtos.map(p=>p.cat))];document.getElementById('cardapioCmdCats').innerHTML=\`<button style="padding:5px 13px;border-radius:20px;background:var(--pr);color:#fff;border:none;cursor:pointer;font-size:.75px;" onclick="renderCardapioCmd()">Todos</button>\`+cats.map(c=>\`<button style="padding:5px 13px;border-radius:20px;background:#222;color:#aaa;border:none;cursor:pointer;font-size:.75rem;" onclick="filtrarCmdCat('${c.replace(/'/g,"\\'")}',this)">${c}</button>\`).join('');document.getElementById('cardapioCmdGrid').innerHTML=produtos.filter(p=>p.disponivel!==false).map(p=>\`<div style="background:#1a1a1a;border-radius:10px;overflow:hidden;cursor:pointer;border:2px solid transparent;text-align:center;" onclick="abrirQty('${p.id}')"><img src="${p.img||'https://placehold.co/130x78/1a1a1a/444?text=?'}" style="width:100%;height:78px;object-fit:cover;"><div style="font-size:.73rem;font-weight:700;padding:5px 6px 2px;">${p.nome}</div><div style="font-size:.76rem;color:var(--pr);font-weight:700;padding-bottom:4px;">${fmt(p.preco)}</div></div>\`).join('');}
window.filtrarCmdCat=function(cat,btn){document.getElementById('cardapioCmdGrid').innerHTML=produtos.filter(p=>p.cat===cat&&p.disponivel!==false).map(p=>\`<div style="background:#1a1a1a;border-radius:10px;overflow:hidden;cursor:pointer;text-align:center;" onclick="abrirQty('${p.id}')"><img src="${p.img||'https://placehold.co/130x78/1a1a1a/444?text=?'}" style="width:100%;height:78px;object-fit:cover;"><div style="font-size:.73rem;font-weight:700;padding:5px 6px 2px;">${p.nome}</div><div style="font-size:.76rem;color:var(--pr);font-weight:700;padding-bottom:4px;">${fmt(p.preco)}</div></div>\`).join('');}
window.abrirQty=function(id){const p=produtos.find(x=>x.id===id);if(!p||!mesaSelecionada)return;_qtyProd=p;document.getElementById('qtyMesaTag').textContent='🪑 '+mesaSelecionada.nome;document.getElementById('qtyProdImg').src=p.img||'';document.getElementById('qtyProdNome').textContent=p.nome;document.getElementById('qtyProdPreco').textContent=fmt(p.preco)+' cada';document.getElementById('qtyN').textContent='1';document.getElementById('qtyObs').value='';document.getElementById('qtySub').textContent=fmt(p.preco);document.getElementById('qtyWrap').classList.add('open');}
window.fecharQty=function(){document.getElementById('qtyWrap').classList.remove('open');_qtyProd=null;}
window.qtyStep=function(d){const el=document.getElementById('qtyN');let v=Math.max(1,parseInt(el.textContent)+d);el.textContent=v;if(_qtyProd)document.getElementById('qtySub').textContent=fmt(_qtyProd.preco*v);}
window.confirmarQty=async function(){const p=_qtyProd;if(!p||!mesaSelecionada)return;const qty=parseInt(document.getElementById('qtyN').textContent)||1;const obs=document.getElementById('qtyObs').value.trim();const c=comandas.find(x=>x.id===mesaSelecionada.id);if(!c)return;const ex=c.itens.find(i=>i.nome===p.nome&&(i.obs||'')===(obs));if(ex)ex.qty+=qty;else c.itens.push({id:uid(),nome:p.nome,preco:p.preco,qty,obs,cat:p.cat});await setDoc(doc(fdb,'comandas',c.id),c);fecharQty();renderDetalheComanda();const t=document.getElementById('cmdToast');document.getElementById('cmdToastTxt').textContent=\`${qty}x ${p.nome} adicionado ✅\`;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200);}
window.openFecharMesa=function(){if(!mesaSelecionada)return;editCmdId=mesaSelecionada.id;const c=comandas.find(x=>x.id===mesaSelecionada.id);const tot=c.itens.reduce((a,i)=>a+i.preco*i.qty,0);document.getElementById('fcMesaNome').textContent='🪑 '+c.nome;document.getElementById('fcTot').textContent=fmt(tot);document.getElementById('fcResumo').innerHTML=c.itens.map(i=>\`<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #1e1e1e;font-size:.85rem;"><span>${i.nome} ${i.obs?\`(${i.obs})\`:''}</span><span style="color:var(--pr);font-weight:700;">${fmt(i.preco*i.qty)}</span></div>\`).join('');cls('ovCmd');opn('ovFechar');}
window.confirmarFechamento=async function(){const c=comandas.find(x=>x.id===editCmdId);if(!c)return;const tot=c.itens.reduce((a,i)=>a+i.preco*i.qty,0);await registrarVenda(c.itens,'comanda');await deleteDoc(doc(fdb,'comandas',c.id));mesaSelecionada=null;document.getElementById('cmdDetalhe').style.display='none';cls('ovFechar');renderMesaGrid();const w=window.open('','_blank','width=400,height=600');w.document.write(\`<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:monospace;padding:20px;font-size:13px;max-width:340px;margin:auto;}h2{text-align:center;}.row{display:flex;justify-content:space-between;margin:3px 0;}.tot{font-weight:bold;font-size:15px;}</style></head><body><h2>🍣 YANNI SUSHI</h2><hr><p><b>${c.nome}</b></p><hr>${c.itens.map(i=>\`<div class="row"><span>${i.qty}x ${i.nome}</span><span>R$${(i.preco*i.qty).toFixed(2)}</span></div>\`).join('')}<hr><div class="row tot"><span>TOTAL</span><span>R$${tot.toFixed(2)}</span></div><hr><p style="text-align:center;">Obrigado! 🙏</p></body></html>\`);w.document.close();setTimeout(()=>{w.focus();w.print();},400);}
let _upsellProd=null;
window.fecharUpsell=function(){document.getElementById('upsellBar').classList.remove('show');_upsellProd=null;}
window.addUpsell=function(){if(!_upsellProd)return;addCart(_upsellProd.id);fecharUpsell();}
initFB();
</script>
</body>
</html>`;

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
        if (["approved","paid","APPROVED","PAID"].includes(status)) {
          const pedidoId = await buscarPedidoPorRef(orderId, FIREBASE_PROJECT, FIREBASE_API_KEY);
          if (pedidoId) {
            await atualizarPedido(pedidoId, {status:"pago",statusPagamento:"aprovado",pagoEm:new Date().toISOString(),valorPago:valor,infinitePayOrderId:orderId}, FIREBASE_PROJECT, FIREBASE_API_KEY);
            return new Response(JSON.stringify({ok:true,pedidoId}), {status:200,headers:{"Content-Type":"application/json"}});
          }
        }
        return new Response(JSON.stringify({ok:true}), {status:200,headers:{"Content-Type":"application/json"}});
      } catch(e) {
        return new Response(JSON.stringify({erro:e.message}), {status:500,headers:{"Content-Type":"application/json"}});
      }
    }
    // ✅ SUKI PAINEL — chave protegida via variável de ambiente
    if (request.method === "POST" && url.pathname === "/suki-painel") {
      try {
        const body = await request.json();
        const pergunta = body.pergunta || '';
        const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method:'POST',
          headers:{'Content-Type':'application/json','Authorization':'Bearer ' + env.GROQ_API_KEY},
          body:JSON.stringify({model:'llama-3.3-70b-versatile',messages:[{role:'system',content:'Você é Suki, assistente do Yanni Sushi de Alegrete-PI. Responda em português, máximo 3 linhas.'},{role:'user',content:pergunta}],max_tokens:400})
        });
        const d = await r.json();
        const resposta = d.choices&&d.choices[0] ? d.choices[0].message.content : 'Suki não conseguiu conectar.';
        return new Response(JSON.stringify({resposta}), {status:200,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});
      } catch(e) {
        return new Response(JSON.stringify({resposta:'Suki não conseguiu conectar.'}), {status:200,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});
      }
    }
    // ✅ SUKI UPSELL — chave protegida via variável de ambiente
    if (request.method === "POST" && url.pathname === "/suki") {
      try {
        const body = await request.json();
        const p = 'Carrinho: '+(body.carrinho||'')+'. Escolha UM produto: '+(body.opcoes||'')+' Responda so o ID.';
        const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method:'POST',
          headers:{'Content-Type':'application/json','Authorization':'Bearer ' + env.GROQ_API_KEY},
          body:JSON.stringify({model:'llama-3.3-70b-versatile',messages:[{role:'user',content:p}],max_tokens:20})
        });
        const d = await r.json();
        const id = d.choices&&d.choices[0] ? d.choices[0].message.content.trim() : '';
        return new Response(JSON.stringify({id}), {status:200,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});
      } catch(e) {
        return new Response(JSON.stringify({id:''}), {status:200,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});
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
  const res = await fetch(`https://firestore.googleapis.com/v1/projects/${project}/databases/(default)/documents:runQuery?key=${apiKey}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({structuredQuery:{from:[{collectionId:"pedidos"}],where:{fieldFilter:{field:{fieldPath:"infinitePayOrderId"},op:"EQUAL",value:{stringValue:orderId}}},limit:1}})});
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
  for (const [k,v] of Object.entries(data.fields)) obj[k] = v.stringValue??v.integerValue??v.doubleValue??v.booleanValue??null;
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
