BSui.tabs = function(selector)
{
	if (typeof tabAlign == "undefined")
		tabAlign = 'right';
	var obj = $(selector);
	if (obj.hasClass('tabbed'))
		return;
	$(selector).each(function () {
		var obj = $(this);
		var tabTitle =	obj.attr('title');
		if (tabTitle == null)
			tabTitle = '';
		var container = $(
			'<div class="panel panel-default">' +
			'	<div class="panel-heading panel-heading-nav">' +
			'		<ul class="nav nav-tabs nav-ers-tab"></ul>' +
			'	</div>' +
			'	<div class="panel-body clearfix">' +
			'		<div class="tab-content"></div>' +
			'	</div>' +
			'</div>'
		);
		obj.before(container);
		container.attr('tab_index', BSuiTabIndex);
		container.find('SPAN.caption-subject').html(obj.attr('title'));
		container.find('I.icon').addClass(obj.attr('icon'));
		var tabs = obj.find('>DIV');
		var currTab = 0;
		var bsTabs = Page.GetParameter('bs-tabs');
		if (bsTabs)
		{
			var values = bsTabs.split(',');
			if (typeof values[BSuiTabIndex] != "undefined")
				currTab = values[BSuiTabIndex];
		}
		for(var i=0; i<tabs.length; i++)
		{
			var title = tabs.eq(i).attr('title');
			var url = tabs.eq(i).attr('url');
			var id = tabs.eq(i).attr('id');
			if (! id)
				id = 'bs_tabs_' + BSuiTabIndex +'_'+ i;
			tabs.eq(i)
				.appendTo(container.find('.tab-content'))
				.addClass('tab-pane ' + (currTab == i ? ' active in' : ''))
				.attr('id', id).css('margin-top','15px');
			var li = $('<li><a href="" data-toggle="tab" role="tab" ></a></li>').appendTo(container.find('UL.nav:first'));
			if (currTab == i)
				li.addClass('active');
			var a = li.find('A:first').html(title);
			if (url)
			{
				var parts = ParamsFromStr(url);
				parts['bs-tabs' + (BSuiTabIndex == 0 ? '': BSuiTabIndex)] = i;
				url = window.location.href;
				for(var name in parts)
					url = Page.UrlChangeParam(name, parts[name], url);
				a.attr('href', url);
				li.click(function(e){
					window.location.href = $(this).find('A:first').attr('href');
					e.stopPropagation();
				});
			}
			else
				a.attr('href', '#' + id);
		}

		container.attr('id', obj.attr('id'));
		obj.remove();
		BSuiTabIndex++;
	});
};
