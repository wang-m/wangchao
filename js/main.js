//<!--//自我评价轮播图开始-->
    
    	var mySwiper = new Swiper('.swiper-container', {
					autoplay: 1000,//可选选项，自动滑动
					pagination : '.swiper-pagination',
			//		paginationType : 'custom',
					uniqueNavElements :true,
					prevButton:'.swiper-button-prev',
					nextButton:'.swiper-button-next',
			})
    
//  <!--//自我评价轮播图结束-->
 $(function(){
    		$(window).resize(function(){
    			var clientH=$(window).height();
    			$('.header').height(clientH);
    			
    			
    		})
    		$('.header_right_nav').click(function(){
    			$('.container .header .phoneMune').slideToggle(200)
    		})
//		计算移动端#project的高度开始project
//  		var spanHeight=$('.project_nav1 span').height();
//  		var spanLength=$('.project_nav1').children().length
//  		var projectHeight=spanHeight*spanLength+300+'px';
//  		if($(document).width()>=757){
//  				$('#project').height('900')
//  			}else{
//
//						$('#project').css({'height':projectHeight})
//  			}
//			$(window).resize(function(){
//				if($(document).width()>=757){
//  				$('#project').height('900')
//  			}else{
//
//						$('#project').css({'height':projectHeight})
//  			}
//			})
    		//		计算移动端#project的高度结束
    		$('.container #project .project_nav1 span').hover(function(){
    			$(this).css({'background':'#000'})
    			$(this).find($('.project_nav1 span img')).css({'opacity':0.5})
    			$(this).find($('.zhaoceng')).fadeIn();
    			$(this).find($('.zhaoceng small')).animate({'margin':'10px'})
//  			$('.container #project .project_nav1 span .zhaoceng i').animate({'padding-top':'10px'})
    		},function(){
    			$(this).find($('.zhaoceng')).fadeOut();
    			$(this).find($('.zhaoceng small')).animate({'margin':'0'});
    			$(this).css({'background':'none'});
    				$(this).find($('.project_nav1 span img')).css({'opacity':1})
    		})
//  	专业技能高度开始
				
				$(window).resize(function(){
					var skill_Height=$('#skill').height();
//					$('#skill').height(skill_Height);
						$('#skill').css({'height':+'skill_Height'})
					$('#skill').css({'background':'#f4d03f'})
					
				})
//专业技能高度结束
//项目经验下面span元素屏幕小于400px时,显示一列  开始
			var windowWidth=null;
				windowWidth=$(window).width();
			
				if(windowWidth<350){
					$('#project .project_nav1 span').width('70%')
				}else{return false;}
			
			$(window).resize(function(){
				windowWidth=$(window).width();
			
				if(windowWidth<350){
					$('#project .project_nav1 span').width('70%')
				}else{return false;}
			})
			

				
//项目经验下面span元素屏幕小于400px时,显示一列  结束
		})
 
 			$('.container #project .project_nav1 span').hover(function(){
    			$(this).css({'background':'#000'})
    			$(this).find($('.project_nav1 span img')).css({'opacity':0.5})
    			$(this).find($('.zhaoceng')).fadeIn();
    			$(this).find($('.zhaoceng small')).animate({'margin':'10px'})
//  			$('.container #project .project_nav1 span .zhaoceng i').animate({'padding-top':'10px'})
    		},function(){
    			$(this).find($('.zhaoceng')).fadeOut();
    			$(this).find($('.zhaoceng small')).animate({'margin':'0'});
    			$(this).css({'background':'none'});
    				$(this).find($('.project_nav1 span img')).css({'opacity':1})
    		})
    	








//<!--屏幕滚动条滚动开始-->
    
    	$(function(){
    		$(window).scroll(function(){
    			if($('#navbar').offset().top>50){
    				$('#navbar').addClass('navbar-black')
    			}else{
    				$('#navbar').removeClass('navbar-black')
    			}
    		})
    	$('.container .header .header_bottom1 .oa').click(function(){
    		var $dataOffsetTop=$('#data').offset().top;
		    $("html,body").animate({scrollTop:$dataOffsetTop},500)
    	})
    	$('.navbar-brand').click(function(){ 
    		$('html,body').animate({scrollTop:'0'},500)
    	})
		    	$('.navbar #scrollnav li').click(function(){
		    		$('#navbarphone').removeClass('in')
		    	})
		    	
		    	//  	获取事件源开始scrollnav
		    	$('.navbar #scrollnav').click(function(e){
		    		var e=e||window.event;
						var target=e.target||e.srcElement;
						var id=target.id;
		    		if(id==='data1'){
		    			var $dataOffsetTop=$('#data').offset().top;
		    			$("html,body").animate({scrollTop:$dataOffsetTop},500)
		    		}else if(id==='project1'){
		    			var $projectOffsetTop=$('#project').offset().top;
		    			$("html,body").animate({scrollTop:$projectOffsetTop},500)
		    		}else if(id==='skill1'){
		    			var $skillOffsetTop=$('#skill').offset().top;
		    			$("html,body").animate({scrollTop:$skillOffsetTop},500)
		    		}else if(id==='work1'){
		    			var $workOffsetTop=$('#work').offset().top;
		    			$("html,body").animate({scrollTop:$workOffsetTop},500)
		    		}else if(id==='bg1'){
		    			var $bgOffsetTop=$('#bg').offset().top;
		    			$("html,body").animate({scrollTop:$bgOffsetTop},500)
		    		}else if(id==='lianxi1'){
		    			var $lianxiOffsetTop=$('#lianxi').offset().top;
		    			$("html,body").animate({scrollTop:$lianxiOffsetTop},500)
		    		}
		    		
		    	})
		    	//<!--屏幕滚动条滚动结束-->
		    	
		    	
//	发送邮件开始
			$('#lianxi .fasong').click(function(){
					if($('#lianxi form .form-group input').val()===''){
						
							$('#lianxi .fasong').removeClass('btn-success').addClass('btn-danger')
							$('#lianxi .form-group1 input').val('请输入邮箱')
							$('#lianxi .form-group1').removeClass('has-success').addClass('has-error')
							$('#lianxi .form-group2 input').val('请输入姓名')
							$('#lianxi .form-group2').removeClass('has-success').addClass('has-error')
						
					}
					
			})
			show()
			function show(){
						$('#lianxi div.form-group input').focus(function(){
						$('#lianxi .fasong').removeClass('btn-danger').addClass('btn-success');
						$(this).val('')
					})
					$('#lianxi textarea').focus(function(){
						$('#lianxi .fasong').removeClass('btn-danger').addClass('btn-success')
					})
					$('#lianxi div.form-group1 input').blur(function(){
						if($(this).val()===''){
							$('#lianxi .form-group1 input').val('请输入邮箱')
							$('#lianxi .form-group1').removeClass('has-success').addClass('has-error')
						}else{
							$('#lianxi .form-group1').removeClass('has-error').addClass('has-success')
						}
		
					})
					$('#lianxi div.form-group2 input').blur(function(){
						if($(this).val()===''){
							$('#lianxi .form-group2 input').val('请输入姓名')
							$('#lianxi .form-group2').removeClass('has-success').addClass('has-error')
						}else{
							$('#lianxi .form-group2').removeClass('has-error').addClass('has-success')
						}
			})
			}
			
			
			
//	发送邮件结束
//所有,pc端,响应式,移动端开始bounceOutUp  #F4D03F
			function fn1(index){
				var projectnavspan=$('#project .project_nav span');
				projectnavspan.each(function(){
									projectnavspan.css('background','#fff')
								})
				projectnavspan[index].style.background='#F4D03F'
			}
				
			$('#project .project_nav #all').click(function(){
				fn1(0)
				$('.project_nav1 span').fadeIn(1000)
			})
			$('#project .project_nav #pcd').click(function(){
				fn1(1)
//				$(".project_nav1 .pcd").addClass('bounceOutUp').fadeOut(1000);
				$(".project_nav1 .pcd").show();
				$(".project_nav1 .phoned,.xiangying").hide()
			})
			$('#project .project_nav #phoned').click(function(){
				fn1(2)
//				$(".project_nav1 .phoned").addClass('bounceOutUp').fadeOut(1000);
				$(".project_nav1 .phoned").show();
				$(".project_nav1 .pcd,.xiangying").hide()
			})
			$('#project .project_nav #xiangying').click(function(){
				fn1(3)
//				$(".project_nav1 .xiangying").addClass('bounceOutUp').fadeOut(1000);
					$(".project_nav1 .xiangying").show();
				$(".project_nav1 .pcd,.phoned").hide()
			})
//			$('#project .project_nav').click(function(e){
//				var e=e||event;
//				var target=e.target||e.srcElement;
//				var targetid=target.id;
//				var projectnavspan=$('#project .project_nav span')
//				projectnavspan.each(function(){
//					projectnavspan.css('background','#fff')
//				})
//				console.log(projectnavspan[1])
//				
//				if(targetid==='all'){
//					$('.project_nav1 span').fadeIn()
//					projectnavspan[0].style.background='#F4D03F'
//				}else if(targetid==='pcd'){
//					$(".project_nav1 .pcd").addClass('bounceOutUp').fadeOut(1000);
//					projectnavspan[1].style.background='#F4D03F'
//				}else if(targetid==='phoned'){
//					
//					$(".project_nav1 .phoned").addClass('bounceOutUp').fadeOut(1000);
//					projectnavspan[2].style.background='#F4D03F'
//				}else if(targetid==='xiangying'){
//					$(".project_nav1 .xiangying").addClass('bounceOutUp').fadeOut(1000);
//					projectnavspan[3].style.background='#F4D03F'
//				}
//			})
				
//所有,pc端,响应式,移动端结束
    	})


    