<div class="sidebar">
    <!--
      Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red"
  -->
    <div class="sidebar-wrapper">
      <div class="logo">

          <img  src="{{asset('assets/img/logo.png')}}" alt="">

      </div>
      <ul class="nav">
        <li class="active ">
          <a href="{{route('formateur.index')}}">
            <i class="tim-icons icon-chart-pie-36"></i>
            <p style="font-size: 14px";>Gestion Formateur</p>
          </a>
        </li>
        <li class="active ">
          <a href="{{route('apprenant.index')}}">
            <i class="tim-icons icon-chart-pie-36"></i>
            <p style="font-size: 14px";>Gestion Apprenant</p>
          </a>
        </li>
        <li class="active ">
          <a href="">
            <i class="tim-icons icon-chart-pie-36"></i>
            <p style="font-size: 14px">Gestion Group</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
